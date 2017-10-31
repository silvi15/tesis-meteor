import React, {PropTypes} from 'react';
import { ListGroup, ListGroupItem, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const handleNav = (history, _id) => {
    history.push(`/projects/${_id}`);
   
};

const ProjectsList = ({ history, projects }) => (
   projects.length > 0 ? <ListGroup className="ProjectsList">
        {projects.map(({_id, name, money, desc, userowner, skills, days}) => (
            <div key={ _id } onClick={ () => handleNav(history, _id ) }>
            <div className="listproject">
            <ul className="dc ayn">
            <h2><i className="name"><span className="fa fa-id-card-o" aria-hidden="true"> </span>  { name } </i></h2> 
            <h2><i className="desc"><p><span className="fa fa-list" aria-hidden="true"> </span> {desc} </p></i></h2>
            <h2><i className="desc"><p><span className="fa fa-user-o" aria-hidden="true"> </span> <Link to="/profile/:_id">{userowner}</Link> </p></i></h2>
            <h2><i className="desc"><p><span className="fa fa-wrench" aria-hidden="true"> </span> Skills </p></i></h2>
            <p>{skills.map((skill,index) => (
                        <Button key={index}
                                style={{margin: "5px"}}
                        >
                        { skill }
                        </Button>
                    ))}</p>
            <i><Button className="money">   <span className="fa fa-money" aria-hidden="true"> </span> {money} </Button></i>
            <i><Button className="days">   <span className="fa fa-calendar" aria-hidden="true"> </span> {days} </Button></i>
            <i><Button className="postulate">    <span> Postulate </span>  </Button></i>
            </ul>
            </div>
            </div> 
        )).reverse()}
        </ListGroup> :
        <Alert bsStyle="warning"> No Projects yet. </Alert>
);
ProjectsList.propTypes = {
    history: PropTypes.object,
    projects: PropTypes.array,
};
export default ProjectsList;