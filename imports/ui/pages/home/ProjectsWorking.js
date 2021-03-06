import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Row, Col, Button } from 'react-bootstrap';
import MenuProject from '../../components/MenuProject';
import UserProjectWorking from '../../containers/project/UserProjectsWorking';
export default class ProjectsWorking extends React.Component{
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
    const { user } = this.state;
    console.log('user', user);
    return (
        <div className="container">
            <MenuProject />
            <UserProjectWorking user={user} />
        </div>
    );
    }
}