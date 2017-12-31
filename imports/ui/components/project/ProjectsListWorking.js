import React, {PropTypes, Component} from 'react';
import { ListGroup, ListGroupItem, Alert, Button, Form, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import notificationEditor from '../../../modules/project/notification-editor';

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
    componentDidMount(){
        notificationEditor({ component: this });
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    selectedProject(idproject, userpostulate, userowner){
        this.setState({
            notification: { 
                selectedProject: idproject,
                userpostulate: userpostulate._id,
                userowner: userowner,
            }
        });
    }
    render(){
        const { user } = this.state;
        const { projects } = this.state;
        return(   
            <form ref={form => this.notificationEditForm = form }
                  onSubmit={ this.handleSubmit }
            >
            <div className="ProjectsList">
            {projects.map(({_id, name, desc, userowner, state, dateStart, dateFinish }) => (
                <div key={ _id } >
                <div className="listproject">
                <ul className="dc ayn">
                <h3><div className="name"> { name } </div></h3> 
                <h5><div className="desc"><p><span className="fa fa-list" aria-hidden="true"> </span> {desc} </p></div></h5>
                <h5><div className="desc"><p><span className="fa fa-user-o" aria-hidden="true"> </span> <Link to="/profile/:_id">{userowner}</Link> </p></div></h5>
                <h5><div className="time"><p><span className="fa fa-calendar-o" aria-hidden="true"> </span> Start : 18/10/2017 </p></div></h5>
                <h5><div className="time"><p><span className="fa fa-clock-o" aria-hidden="true"> </span> Today : 20/10/2017 </p></div></h5>
                <h5><div className="time"><p><span className="fa fa-calendar" aria-hidden="true"> </span> Finish: 18/11/2017 </p></div></h5>
                <h5><div className="state"><p><span className="fa fa-spinner" aria-hidden="true"> </span> {state} </p></div></h5>
                <span className="fa fa-spinner" aria-hidden="true"> </span>
                <i><Button className="finish" 
                           aria-hidden="true"
                           type="submit"
                           onClick={()=>{this.selectedProject(_id,user,userowner)}}>  
                    { projects && projects._id ? 'Save Changes' : 'Finish' }
                    <span className="fa fa-check" aria-hidden="true"> </span>
                </Button></i>
                </ul>
                </div>
                </div> 
            )).reverse()}
            </div>
       </form>);
    }
} 
