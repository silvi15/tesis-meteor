import React, {PropTypes, Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { ListGroup, ListGroupItem, Alert, Button, Form, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import notificationEditor from '../../../modules/project/notification-editor';
//import UserName from '../../containers/user/UserName';
export default class ProjectsListWorking extends Component{
    constructor(props){
        super(props);  
        this.state = {
            projects: this.props.projects,
            user: Meteor.users.findOne(Meteor.userId()),
            notification:{
                selectedProject:'',
                userpostulate:'',
                userowner:'',
            }
        }
    }
   
    render(){
        const { user } = this.state;
        const { projects } = this.state;
        return(   
            <div className="ProjectsList">
            {projects.map(({_id, name, desc, userowner, state, dateStart, dateFinish }) => (
                <div key={ _id } >
                <div className="listproject">
                <ul className="dc ayn">
                <h3><div className="name"> { name } </div></h3> 
                <h5><div className="desc"><p><span className="fa fa-list" aria-hidden="true"> </span> {desc} </p></div></h5>
                <h5><div className="desc"><p><span className="fa fa-user-o" aria-hidden="true"> </span> <Link to="/profile/:_id"> ctomba@gmail.com</Link> </p></div></h5>
                <h5><div className="time"><p><span className="fa fa-calendar-o" aria-hidden="true"> </span> Start : 01/01/2018 </p></div></h5>
                <h5><div className="time"><p><span className="fa fa-clock-o" aria-hidden="true"> </span> Today : 20/01/2018 </p></div></h5>
                <h5><div className="time"><p><span className="fa fa-calendar" aria-hidden="true"> </span> Finish: 01/03/2018 </p></div></h5>
                <h5><div className="state"><p><span className="fa fa-spinner" aria-hidden="true"> </span> {state} </p></div></h5>
                <span className="fa fa-spinner" aria-hidden="true"> </span>
                <i>
                <NavLink to="/feedbacks/new" className="btn btn-success" >
                            Finish
                        </NavLink>
                </i>
                </ul>
                </div>
                </div> 
            )).reverse()}
            </div>
       );
    }
} 
