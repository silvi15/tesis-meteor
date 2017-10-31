import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Row, Col, Button } from 'react-bootstrap';
export default class Notification extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        user: Meteor.users.findOne(Meteor.userId())
    }
}
render(){
    return (
        <div className="Projects">  
        <Row>
          <Col xs={ 12 }>
            <div className="page-header clearfix">
             <div className="container"> <h3 className="pull-left"> <label>Inbox</label> </h3> </div>
            </div>
          </Col>
        </Row>
      </div>
    );
}
}
