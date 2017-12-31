import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import MenuProject from '../../components/MenuProject';

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
    return (
        <div className="container">  
            <div className="page-header clearfix">
             <div className="container"> <h3 className="pull-left"> <label>Home</label> </h3> </div>
                 <MenuProject />  
            </div>                
        </div>
    );
}
}
