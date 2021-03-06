import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'; 
import { HashRouter as Router, Route, Link, NavLink, Redirect } from 'react-router-dom';

import '../stylesheets/app.css'
import '../stylesheets/index.css'

// A RegisterForm component that can be exported at the end of the file and can be reused anywhere
class RegisterForm extends Component
{
    constructor(props)
    {
      super(props)
      
      // Define the variables to be stored in our state
      this.state = {
        name:'',
        email: '',
        password: '',
        hasAgreed: false
      };
      
      // This lets us define functions outside of the constructor
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Function that gets called
    handleChange(event) 
    {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
        
            [name]: value     
            
        });
    }
    
    // Function that gets called when we press our submit button, in this case SignUp/Login
    handleSubmit(event)
    {
        console.log("Register successfull.. Redirecting to authentication");
        this.props.createState(this.state.name, this.state.email, this.state.password);
        this.props.history.push('/auth');
    }

    render()
    {
        // Render the forms required for register
        return(
            <div className="FormCenter">
            
              {/* Login/Signup text links above the forms */}
              <div className="FormTitle">
                    <NavLink to="/Login"
                    activeClassName="FormTitle__Link--Active"
                    className="FormTitle__Link">Sign In</NavLink> or

                    <NavLink to="/Register"
                    activeClassName="FormTitle__Link--Active"
                    className="FormTitle__Link">Sign Up</NavLink>
             </div>

                <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
                    
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" onChange={this.handleChange} value={this.state.name}></input>
                    </div>
                    
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Email</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email address" name="email"onChange={this.handleChange} value={this.state.email} ></input>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="Password" id="Password" className="FormField__Input" placeholder="Enter your password" name="password" onChange={this.handleChange} value={this.state.password}></input>
                    </div>

                    <div className="FormField">
                    <label className="FormField__CheckboxLabel">
                        <input className="FormField__Checkbox" type="checkbox" name="hasAgreed"/> I agree all statements in <a href="" className="FormField__TermsLink" onChange={this.handleChange} value={this.state.hasAgreed}>terms of service</a>
                    </label>
                    </div>
                
                    <div className="FormField">
                        <button className="FormField__Button mr-20" onSubmit={this.handleSubmit}>Sign Up</button>
                    </div>

                </form>

          </div>
        );
   
    }
}

export default withRouter(RegisterForm)