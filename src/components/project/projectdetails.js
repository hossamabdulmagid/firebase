import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
 const Projectdetails = (props) => {
    const id =  props.match.params.id;
    //console.log(props);
    return (
         <div  className="container section project-details">
             <div className="card z-depth-0">
                 <div className="card-content">
                     <span className="card-tittle"> Project Title {id} </span>
                     <p> Hello from Sawsaw phargraph its for news and News your are Welcome to my website,Hello from Sawsaw phargraph its for news and News your are Welcome to my website</p>
                 </div>
                 <div className="card-action grey lighten-4 grey-text">
                     
                 <div>Posted By Sawsaw</div>
                 <div>26,august ,1am</div>
                 </div>
             </div>
        </div>
     );
 }
 const mapStateToProps = (state,ownProps) =>{
   //  console.log(state);
     const id = ownProps.props.match.params.id
     const projects = state.firestore.data.projects
     return{

     }
 }

 export default compose(
      connect(mapStateToProps),
 firestoreConnect([
     { collection: 'projects' }
 ]))
 (Projectdetails);