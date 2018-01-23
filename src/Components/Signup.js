import React, { Component } from 'react';

class Signup extends Component {
    constructor(props){
        super(props)
        this.state = { hits: null };
    }
    handleSubmit(event){

        const data = new FormData(event.target);
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            body: data,
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => sessionStorage.setItem('token', response.auth_token));

    }

    render() {
        return(
            <div>
            <h3>Signup</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:<br />
                        <input type="text" name="name" />
                    </label>
                    <label>
                        <br />Email Address:<br />
                        <input type="text" name="email" pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" />
                    </label>
                    <label>
                        <br />Password:<br />
                        <input type="password" name="password" />
                    </label>
                    <label>
                        <br />Confirm Password:<br />
                        <input type="password" name="password_confirmation" />
                    </label>
                    <br />
                    <input type="submit" name="Submit" />
                </form>
            </div>
        );
    }
}

export default Signup