import React, {PropTypes} from 'react';
import { ListGroup, ListGroupItem, Alert, Button } from 'react-bootstrap';

const handleNav = (history, _id) => {
    history.push(`/projects/${_id}`);
};

const ProjectsList = ({ history, projects }) => (
    projects.length > 0 ? <ListGroup className="ProjectsList">
        {projects.map(({_id, name, money}) => (
            <ListGroupItem key={ _id } onClick={ () => handleNav(history, _id ) }>
            <div className="listproject">
            <i className="name"><span className="fa fa-id-card-o" aria-hidden="true"> </span>  { name } </i> 
            <i className="money"><span className="fa fa-money" aria-hidden="true"> </span> {money} </i>
            <i className="lupa"><span className="fa fa-search-plus" aria-hidden="true"> </span>  </i>
            </div>
            </ListGroupItem> 
        ))}
        </ListGroup> :
        <Alert bsStyle="warning"> No Projects yet. </Alert>
);
ProjectsList.propTypes = {
    history: PropTypes.object,
    projects: PropTypes.array,
};
export default ProjectsList;