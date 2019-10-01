import React from 'react';
import { NavLink } from 'react-router-dom';


const Signedinlinks = () => {
    return (
   <ul className="right">
       <li> <NavLink to='/create'> New Project</NavLink></li>
       <li> <NavLink to='/'> Logout</NavLink></li>
       <li> <NavLink to='/' className='btn btn-floating pink lighten-1'> Hos</NavLink></li>



   </ul>
    );
};
export default Signedinlinks;