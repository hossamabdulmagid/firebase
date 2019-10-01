import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/action/projectActions';
class createproject extends Component {
    state = {
        title : '',
        content : ''  
    }
    handlechange = (e) => { 
 this.setState ({
     [e.target.id]: e.target.value
 })
    }
    
    handlesubmit = (e) => { 
        e.preventDefault();
     //   console.log(this.state);   
     this.props.createProject(this.state)
     }
     render(){
        return(
            <div className="container">
                <form onSubmit={this.handlesubmit} className="white">
                    <h5 className="grey-text text-darken-3">Createproject</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title </label>
                    <input type="text" id="title" onChange={this.handlechange} /> 
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Conteent </label>
                        <textarea  id="content"  className="materialize-textarea" onChange={this.handlechange}></textarea>


                    </div>
                    <div className="input-field">
                        <button  className="btn pink lighten-1 z-depth-0" >Create</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>  {
    return{createProject: (project) => dispatch(createProject(project))}
    }
export default connect(null, mapDispatchToProps)(createproject);    