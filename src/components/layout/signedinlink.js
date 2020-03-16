import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutt} from '../../store/action/authAction';

const Signedinlinks = (props) => {
    return (
   <ul className="right">
       <li> <NavLink to='/create'> New Project</NavLink></li>
       <li> <a onClick={props.signOutt}> Logout</a></li>
       <li> <NavLink to='/' className='btn btn-floating pink lighten-1'> {props.profile.initials}</NavLink></li>
   </ul>
    );
};

const mapDispatchToProps = (dispatch) =>{
    return {
        signOutt: () =>  dispatch(signOutt())
    }
}
export default connect (null,mapDispatchToProps)(Signedinlinks);
