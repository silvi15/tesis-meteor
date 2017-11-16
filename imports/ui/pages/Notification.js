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
        <div className="Notification">    
                <div className="user-content">
                    <div className="card">
                        <img src="/img/silvi.jpeg" className="avatar"/>
                        <h5 className="name">@Silvi</h5>
                    </div>

                    <div className="action">
                        <div className="card-header">
                            <h5> E-commerce </h5>
                        </div>
                            <button type="button" className="btn btn-primary">
                                <span className="glyphicon glyphicon-ok">  </span>
                            </button>
                            <button type="button" className="btn btn-info">
                                <span className="glyphicon glyphicon-info-sign">  </span>
                            </button>
                            <button type="button" className="btn btn-default">
                                <span className="glyphicon glyphicon-remove">  </span>
                            </button>
                    </div>

                </div>
                <div className="user-content">
                    <div className="card">
                        <img src="/img/avatar-men.jpg" className="avatar"/>
                        <h5 className="name">@Jhon</h5>
                    </div>
                </div>
                
        </div>
    );
}
}
