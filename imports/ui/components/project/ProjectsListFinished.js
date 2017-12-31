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
            {projects.map(({_id, name, desc, userowner, state, skills }) => (
                <div key={ _id } >
                <div className="listproject">
                <ul className="dc ayn">
                <h3><div className="name"> { name } </div></h3> 
                <h5><div className="desc"><p><span className="fa fa-list" aria-hidden="true"> </span> {desc} </p></div></h5>
                <h5><div className="desc"><p><span className="fa fa-wrench" aria-hidden="true"> </span> Skills </p></div></h5>
                <p>{skills.map((skill,index) => (
                            <Button key={index}
                                    style={{margin: "5px"}}
                            >
                            { skill }
                            <span className="fa fa-star" aria-hidden="true"> </span>
                            <span className="fa fa-star" aria-hidden="true"> </span>
                            <span className="fa fa-star" aria-hidden="true"> </span>
                            </Button>
                        ))}</p>
                 
                <h5><div className="desc"><p><span className="fa fa-comment" aria-hidden="true"> </span> Comment </p></div></h5>
                <div className="comments">
                    <img class="mr-3" src="/img/avatar-men.jpg" className="img-circle" alt="Cinque Terre" width="30" height="30" />
                        <div class="media-body">
                            <h5 class="mt-0">Media heading</h5>
                            Its was a pleasure work with you!! you're fantastic, I will going to call you again
                        </div>
                    </div>              
                </ul>
                </div>
                </div> 
            )).reverse()}
            </div>
       </form>);
    }
} 
