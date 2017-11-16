import React, { PropTypes, Component } from 'react';
import { Row, Col, Button, ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
const handleNav = (history, _id) => {
  history.push(`/mesagges/${_id}`);
};

const MessaggesList = ({ history, mesagges }) => (
  mesagges.length > 0 ? <ListGroup className="MesaggesList">
  {mesagges.map(({ _id, to }) => (
    <ListGroupItem key={ _id } onClick={ () => handleNav(history, _id) }>
    
      { to }  
    </ListGroupItem>
  ))}
</ListGroup> :
<Alert bsStyle="warning">No Mesagges yet.</Alert>

);

MessaggesList.propTypes = {
  history: PropTypes.object,
  mesagges: PropTypes.array,
};

export default MessaggesList;

