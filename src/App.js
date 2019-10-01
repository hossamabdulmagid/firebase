import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Dashboard from './components/dashboard/dashboard';
import Projectdetails from './components/project/projectdetails';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Createproject from './components/project/createproject';
class  App extends Component {
  render(){
  return (
    <BrowserRouter>
            <div className="App">
             <Navbar />
             <Switch>
               <Route exact path='/' component={Dashboard} />
               <Route path='/project/:id' component={Projectdetails} />
               <Route path='/signin' component={Signin} />
               <Route path='/signup' component={Signup} />
               <Route path='/create' component={Createproject} />

              </Switch>
            </div>
    </BrowserRouter>
  );
}}

export default App;
