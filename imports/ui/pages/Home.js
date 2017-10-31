import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Row, Col, Button } from 'react-bootstrap';

export default class Home extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        user: Meteor.users.findOne(Meteor.userId())
    }
}
render(){
    const showWorker = Roles.userIsInRole(Meteor.userId(),['worker']);
    const showEnterprise = Roles.userIsInRole(Meteor.userId(),['enterprise']);
    /* las variables que no muestre las tengo q aclarar aca, para que no explote*/
    return (
        <div className="container">  
        <Row>
          <Col xs={ 12 }>
            <div className="page-header clearfix">
             <div className="container"> <h3 className="pull-left"> <label>Home</label> </h3> </div>
            </div>
            <div className="home">
        {showWorker &&  <div> soy worker </div> || <div></div> }
        <div className="workin">
            <h4>Work in</h4>
            <div className="rp bra brb agk">
                <div className="rq">
                    <ul className="dc ayn">
                        <li> <span className="glyphicon glyphicon-list-alt"> </span> <a href="#"> Name: </a> <label> E-commerce </label> </li>
                        <li> <span className="glyphicon glyphicon-user"> </span> <a href="#"> From </a> <label> @Jhon </label> </li> 
                        <li> <span className="glyphicon glyphicon-calendar"> </span> <a href="#"> Start</a> <label> 15/08/2017 </label> </li>
                        <li> <span className="glyphicon glyphicon-calendar"> </span> Finished <a href="#"></a> <label> 25/08/2017 </label> </li>
                        <li> <span className="glyphicon glyphicon-record "></span> State <a href="#"> </a> <label> working </label> </li>
                    </ul>
                </div>
            </div>            
        </div>
        <div className="people-work-in-my-project">
            <h4>People Work in My Project</h4>
            <div className="rp bra brb agk">
                <div className="rp bra brb agk">
                    <div className="rq">
                        <ul className="dc ayn">
                            <li> <span className="glyphicon glyphicon-list-alt"> </span> <a href="#"> Name </a> <label> Blog </label> </li>
                            <li> <span className="glyphicon glyphicon-user"> </span> <a href="#"> User </a> <label>  @peter </label> </li>
                            <li> <span className="glyphicon glyphicon-calendar"> </span> <a href="#"> Start</a> <label> 25/08/2017 </label> </li>
                            <li> <span className="glyphicon glyphicon-calendar"> </span> Finished <a href="#"> </a> <label> 10/09/2017 </label> </li>
                            <li> <span className="glyphicon glyphicon-record "></span> State <a href="#"> </a> <label> working </label> </li>
                        </ul>
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
