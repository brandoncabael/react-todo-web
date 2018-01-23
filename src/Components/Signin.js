import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';



class Signin extends Component {
    constructor(props){
        super(props)
    }


    handleSubmit(event){
        const data = new FormData(event.target);
        fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            body: data,
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => sessionStorage.setItem('token', response.auth_token));
        
    }

    render(){
        return(
            <div>
            <h3>Signin</h3>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email Address:<br />
                    <input type="text" name="email" pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" />
                </label>
                <label>
                    <br />Password:<br />
                    <input type="password" name="password" />
                </label>
                <br />
                <input type="submit" name="Submit" />
            </form>
            </div>
        )
    }
}

export default Signin