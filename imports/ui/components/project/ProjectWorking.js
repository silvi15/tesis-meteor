import React, {PropTypes, Component} from 'react';
import { From, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class ProjectWorking extends Component{
    constructor(props){
        super(props);
        this.state={
            user: Meteor.users.findOne(Meteor.userId()),
        }
    handleSubmit(event){
        event.preventDefault();
        }
    }
    render(){
        const { user } = this.state;
        const { projects } = this.state;
        return(
          {/*  <form ref={ form => this.projectWorkingEditForm = form }
                onSubmit={ this.handleSubmit }
            >*/}
                <div className="listproject">
                  {projects.map(({_id, name, desc, userowner}) => (
                   <div key={_id}>
                    <h4>Work in</h4>
                        <div className="rp bra brb agk">
                            <div className="rq">
                                <ul className="dc ayn">
                                    <p> <span className="glyphicon glyphicon-list-alt"> </span> <a href="#"> Name: </a> <label> E-commerce </label> </p>
                                    <p> <span className="glyphicon glyphicon-user"> </span> <a href="#"> From </a> <label> @Jhon </label> </p> 
                                    <p> <span className="glyphicon glyphicon-calendar"> </span> <a href="#"> Start</a> <label> 15/08/2017 </label> </p>
                                    <p> <span className="glyphicon glyphicon-calendar"> </span> Finished <a href="#"></a> <label> 25/08/2017 </label> </p>
                                    <p> <span className="glyphicon glyphicon-record "></span> State <a href="#"> </a> <label> working </label> </p>
                                </ul>
                            </div>
                        </div> 
                   </div>   
                  ))}  
                </div>
         {/*   </form> */} 
        );
    }
}