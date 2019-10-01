import React from 'react';
import { Link } from 'react-router-dom';
import Signedinlinks from "./signedinlink";
import Signedoutlinks from "./signedoutlinks";
import {connect} from 'react-redux';


const Navbar = () => {
    return (
        
    <nav className="nav-wrapper grey darken-3">
        <div className="container">
            <Link to='/' className= "brand-logo">Hossam</Link>
           
            <Signedinlinks />
            <Signedoutlinks />

        </div>
    </nav>
    );
};
const mapStateToProps = (state) =>{
    console.log(state);
    return{
        
    }
}
export default connect(mapStateToProps)(Navbar);