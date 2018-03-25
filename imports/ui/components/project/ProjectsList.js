import React, { PropTypes, Component } from 'react';
import { ListGroup, ListGroupItem, Alert, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notificationEditor from '../../../modules/project/notification-editor';

export default class ProjectsList extends Component {
    constructor(props) {
        super(props);
        console.log('props por profesion', props);
        this.state = {
            projects: this.props.projects,
            user: Meteor.users.findOne(Meteor.userId()),
            selectedProject: '',
            userpostulate: '',
            userowner: '',
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
        return (
            <form ref={form => this.notificationEditForm = form}
                onSubmit={this.handleSubmit}
            >
                <div className="ProjectsList">
                    {projects.map(({ _id, name, money, desc, userowner, skills, days }) => (
                        <div key={_id} >
                            <div className="listproject">
                                <ul className="dc ayn">
                                    <h3><div className="name"> {name} </div></h3>
                                    <h5><div className="desc"><p><span className="fa fa-list" aria-hidden="true"> </span> {desc} </p></div></h5>
                                    <h5><div className="desc"><p><span className="fa fa-user-o" aria-hidden="true"> </span> <Link to="/profile/:_id">ctomba@holos.cl</Link> </p></div></h5>
                                    <h5><div className="desc"><p><span className="fa fa-wrench" aria-hidden="true"> </span> Skills </p></div></h5>
                                    <p>{skills.map((skill, index) => (
                                        <Button key={index}
                                            style={{ margin: "5px" }}
                                        >
                                            {skill}
                                        </Button>
                                    ))}</p>
                                    <i><Button className="money"><span className="fa fa-money" aria-hidden="true"> </span> {money} </Button></i>
                                    <i><Button className="days"><span className="fa fa-calendar" aria-hidden="true"> </span> {days} </Button></i>
                                    <i><Button className="postulate"
                                        type="submit"
                                        onClick={() => { this.selectedProject(_id, user, userowner) }}>
                                        {projects && projects._id ? 'Save Changes' : 'Postulated!'}
                                    </Button></i>
                                </ul>
                            </div>
                        </div>
                    )).reverse()}
                </div>
            </form>);
    }
} 