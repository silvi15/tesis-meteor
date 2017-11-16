import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import MesaggesList from '../../containers/mesagge/MesaggesList';

const Mesagges = ({ history }) => (
<div className="Mesagges"> 
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
         <div className="container"> <h2 className="pull-left">Mesagge</h2> </div>
          <Link to="/mesagges/new">
            <Button className="btn btn-primary">
            New Mesagge</Button>
          </Link>
        </div>
        <MesaggesList history={history} />
      </Col>
    </Row>

  </div>
);

Mesagges.propTypes = {
  history: PropTypes.object,
};

export default Mesagges;
