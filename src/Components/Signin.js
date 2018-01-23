import React, { Component } from 'react';


class Signin extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
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
        fetch('http://localhost:3000/auth/login', {
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

    render(){
        return(
            <div>
            <h3>Signin</h3>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email:<br />
                    <input type="text" name="email" value={this.state.email} onChange={e => this.handleChange("email", e)} />
                </label>
                <label>
                    <br />Password:<br />
                    <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange("password", e)} />
                </label>
            </form>
            </div>
        )
    }
}

export default Signin