import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const handleNav = (history, _id) => {
  history.push(`/feedbacks/${_id}`);
};

const FeedBacksList = ({ history, feedbacks }) => (
  
  feedbacks.length > 0 ? <ListGroup className="FeedBacksList">
    {feedbacks.map(({ _id, comments }) => (
      <ListGroupItem key={ _id } onClick={ () => handleNav(history, _id) }>
        { comments }  
      </ListGroupItem>
    ))}
  </ListGroup> :  <div></div>
);

FeedBacksList.propTypes = {
  history: PropTypes.object,
  feedbacks: PropTypes.array,
};

export default FeedBacksList;
