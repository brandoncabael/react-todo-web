import React, { Component } from 'react';

class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(key, event){
        const newState = {};
        newState[key] = event.target.value
        this.setState(newState)
        console.log(this.state);
    }

    handleSubmit(event){
        const data = new FormData(event.target);
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            body: data,
        }).then(function(response){
            console.log(response);
            if(response.status == 201) {
                alert("User successfully created. Please Log In.")
            }
            else {
                alert("Error creating user, please try again later")
            }
        })
    }

    render() {
        return(
            <div>
            <h3>Signup</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:<br />
                        <input type="text" value={this.state.name} name="name" onChange={e => this.handleChange("name", e)}/>
                    </label>
                    <label>
                        <br />Email Address:<br />
                        <input type="text" value={this.state.email} name="email" onChange={e => this.handleChange("email", e)}/>
                    </label>
                    <label>
                        <br />Password:<br />
                        <input type="password" value={this.state.password} name="password" onChange={e => this.handleChange("password", e)}/>
                    </label>
                    <label>
                        <br />Confirm Password:<br />
                        <input type="password" value={this.state.password_confirmation} name="password_confirmation" onChange={e => this.handleChange("password_confirmation", e)}/>
                    </label>
                    <br />
                    <input type="submit" name="Submit" />
                </form>
        </div>
        );
    }
}

export default Signup