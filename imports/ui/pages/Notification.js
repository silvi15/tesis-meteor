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
        <div className="container">  
        <Row>
          <Col xs={ 12 }>
            <div className="page-header clearfix">
             <div className="container"> <h3 className="pull-left"> <label>Notification</label> </h3> </div>
            </div>
            <div className="Notification">
        <div className="text-center">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <h5 className="mt-0">@Silvi</h5>
                                <img src="/img/silvi.jpeg" className="img-circle" alt="Cinque Terre" width="80" height="80" />
                            </div>
                        </div>                        
                        <div className="col">
                                <div className="card">
                                        <div className="card-header">
                                            <h5 className="card-title"> E-commerce </h5>
                                        </div>
                                        <p>
                                            <a href="/acceptProject" type="button" className="btn btn-primary">
                                                <span className="glyphicon glyphicon-ok">  </span>
                                            </a>
                                            <a href="/projectinfo" type="button" className="btn btn-info">
                                                <span className="glyphicon glyphicon-info-sign">  </span>
                                            </a>
                                            <a href="/home" type="button" className="btn btn-default">
                                                <span className="glyphicon glyphicon-remove">  </span>
                                            </a>
                                        </p>
                                </div>
                        </div>
                        <div className="col">
                                <div className="card">
                                    <h5 className="mt-0">@Jhon</h5>
                                    <img src="/img/avatar-men.jpg" className="img-circle" alt="Cinque Terre" width="80" height="80" />
                                </div>
                            </div>
                    </div>
                </div>
        </div>
          </Col>
        </Row>
      </div>  
    );
}
}
