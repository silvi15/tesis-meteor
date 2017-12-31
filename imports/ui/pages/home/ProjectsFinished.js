import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Row, Col, Button } from 'react-bootstrap';
import MenuProject from '../../components/MenuProject';

export default class ProjectsFinished extends React.Component{
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
             <MenuProject />
            </div>
            <div className="home">
        {showWorker &&  
        <div className="workin">
            <h4>Projects Finished</h4>
            <div className="rp bra brb agk">
                <div className="rq">
                    <ul className="dc ayn">
                        <p> <span className="glyphicon glyphicon-list-alt"> </span> <a href="#"> Name: </a> <label> E-commerce </label> </p>
                        <p> <span className="glyphicon glyphicon-user"> </span> <a href="#"> From </a> <label> @Jhon </label> </p> 
                        <p> <span className="glyphicon glyphicon-calendar"> </span> <a href="#"> Start</a> <label> 15/08/2017 </label> </p>
                        <p> <span className="glyphicon glyphicon-calendar"> </span> Finished <a href="#"></a> <label> 25/08/2017 </label> </p>
                        <p> <span className="glyphicon glyphicon-record "></span> State <a href="#"> </a> <label> working </label> </p>
                    </ul>
                </div>
            </div>            
        </div>
        || <div></div> }        
        </div>
          </Col>
        </Row>
      </div>
    );
}
}