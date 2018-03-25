import React, { PropTypes, Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { ListGroup, ListGroupItem, Alert, Button, Form, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import notificationEditor from '../../../modules/project/notification-editor';
export default class ProjectsListWorking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: this.props.projects,
            user: Meteor.users.findOne(Meteor.userId()),
            notification: {
                selectedProject: '',
                userpostulate: '',
                userowner: '',
            }
        }
    }
    componentDidMount() {
        notificationEditor({ component: this });
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    selectedProject(idproject, userpostulate, userowner) {
        this.setState({
            selectedProject: idproject,
            userpostulate: userpostulate._id,
            userowner: userowner,
        });
    }
    render() {
        const { user } = this.state;
        const { projects } = this.state;
        const showWorkers = Roles.userIsInRole(Meteor.userId(), ['worker']);
        const showEnterprise = Roles.userIsInRole(Meteor.userId(), ['enterprise']);
        return (
            <form ref={form => this.notificationEditForm = form}
                onSubmit={this.handleSubmit}
            >
                <div className="ProjectsList">
                    {projects.map(({ _id, name, desc, userowner, state, dateStart, dateFinish }) => (
                        <div key={_id} >
                            <div className="listproject">
                                <ul className="dc ayn">
                                    <h3><div className="name"> {name} </div></h3>
                                    <h5><div className="desc"><p><span className="fa fa-list" aria-hidden="true"> </span> {desc} </p></div></h5>
                                    <h5><div className="desc"><p><span className="fa fa-user-o" aria-hidden="true"> </span> <Link to="/profile/:_id"> ctomba@gmail.com</Link> </p></div></h5>
                                    <h5><div className="time"><p><span className="fa fa-calendar-o" aria-hidden="true"> </span> Start : 01/01/2018 </p></div></h5>
                                    <h5><div className="time"><p><span className="fa fa-clock-o" aria-hidden="true"> </span> Today : 20/01/2018 </p></div></h5>
                                    <h5><div className="time"><p><span className="fa fa-calendar" aria-hidden="true"> </span> Finish: 01/03/2018 </p></div></h5>
                                    <h5><div className="state"><p><span className="fa fa-spinner" aria-hidden="true"> </span> {state} </p></div></h5>
                                    <span className="fa fa-spinner" aria-hidden="true"> </span>
                                    <i> 
                                        {showEnterprise &&
                                        <Button className="postulate"
                                            type="submit"
                                            onClick={() => { this.selectedProject(_id, user, userowner) }}>
                                            {projects && projects._id ? 'Save Changes' : 'Finishi!'}
                                        </Button> || <div></div>}
                                        {showWorkers &&
                                        <Button className="postulate" type="submit"
                                            onClick={() => { this.selectedProject(_id, user, userowner) }}>
                                            {projects && projects._id ? 'Save Changes' : 'Calification'}
                <NavLink to="/feedbacks/new" className="btn btn-secondary" >

                                            </NavLink>
                                        </Button> || <div></div> }
                                    </i>
                                </ul>
                            </div>
                        </div>
                    )).reverse()}
                </div>
            </form>);
    }
} 
