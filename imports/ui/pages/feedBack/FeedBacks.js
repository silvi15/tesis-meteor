import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import FeedBacksList from '../../containers/feedBack/FeedBacksList';

const FeedBacks = ({ history }) => (
<div className="Documents"> 
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
         <div className="container"> <h2 className="pull-left">FeedBacks</h2> </div>
          <Link to="/feedbacks/new">
            <Button className="btn btn-primary">
            New Feedback!</Button>
          </Link>
        </div>
        <FeedBacksList history={history} />
      </Col>
    </Row>

  </div>
);

FeedBacks.propTypes = {
  history: PropTypes.object,
};

export default FeedBacks;
