import React, { Component } from 'react';
class Signup extends Component {
    state = {
        email : '',
        password : '',
        fistname : '',
        lastname: ''
    }
    handlechange = (e) => { 
 this.setState ({
     [e.target.id]: e.target.value
 });
    };
    
    handlesubmit = (e) => { 
        e.preventDefault();
        console.log(this.state);  
      };

     render(){
        return (
            <div className="container">
                <form onSubmit={this.handlesubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email </label>
                    <input type="email" id="email" onChange={this.handlechange} /> 
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password </label>
                    <input type="password" id="password" onChange={this.handlechange} /> 
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstname">Firstname </label>
                    <input type="text" id="firstname" onChange={this.handlechange} />
                        </div>
                    <div className="input-field">
                        <label htmlFor="lastname">Lastname </label>
                    <input type="text" id="lastname" onChange={this.handlechange} /> 
                    </div>
                    <div className="input-field">
                        <button  className="btn pink lighten-1 z-depth-0" >Sign up</button>
                    </div>
                </form>
            </div>
        );
    }

    }    export default Signup;