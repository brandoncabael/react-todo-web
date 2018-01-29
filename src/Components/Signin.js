import React, { Component } from 'react';



class Signin extends Component {
    constructor(){
        super();
        this.state = {
            auth_key: ''
        };
    }


    handleSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        const data = new FormData(event.target);
        //var fetchResponse = {};
        let obj = {
            link: 'http://localhost:3000/auth/login',
            body: {
                method: 'POST',
                body: data
            }
        };
        fetch(obj.link, obj.body)
        .then(res => res.json())
        .then(response => sessionStorage.setItem('token', response.auth_token));
        //console.log(fetchResponse);
        
    }

    //setResult(response){
        //this.setState({auth_key: response.auth_token});
    //}

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