import React, { Component,PropTypes } from 'react';
import { Link, } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Row, Col, Button } from 'react-bootstrap';

export default class Profile extends React.Component{
    constructor(props){ 
        super(props);
        this.state = {
            user: Meteor.users.findOne(Meteor.userId()),
            }
    }
    render(){
        const {user} = this.state;
        const showWorkers = Roles.userIsInRole(Meteor.userId(),['worker']);
        const showEnterprise = Roles.userIsInRole(Meteor.userId(),['enterprise']);
        const showAdmin = Roles.userIsInRole(Meteor.userId(),['admin']);
        const skills = user && user.profile && user.profile.name && user.profile.name.skills || [];
        return (
            <div className="container">  
            <Row>
              <Col xs={ 12 }>
                <div className="page-header clearfix">
                 <div className="container"> <h3 className="pull-left"> <label>Profile</label> </h3> </div>
                </div>
                <div className="profile">
                    <div className="text-center">
                        { showAdmin && <div>soy admin </div> || <div> </div>}
                        <div className="fondo">
                        <img src="/img/silvi.jpeg" className="avatar" /> 
                        
                        <div className="name">   <label> <h2> {user.profile.name.first}, {user.profile.name.last} </h2> </label> </div>
                        <div className="profession"> <label><h3> {user.profile.name.profession} </h3></label></div> 
                        
                        <div className="description"> <label><h4> {user.profile.name.profiled} </h4></label> </div>                                
                        </div>
                        <div className="skills" >
                        <h3><p><label>Skills</label></p></h3>
                        { skills.map( (skill,index) => {
                            return ( <button key={index} type="button" className="btn btn-primary"> 
                                            {skill}
                                        <p><span className="glyphicon glyphicon-star-empty"></span></p>
                                    </button> 
                                    )})}  
                        </div>
                      
                        <div className="comments">
                         <h3><p><label>Comments</label></p></h3>
                            <img src="/img/avatar-men.jpg" className="img-circle" alt="Cinque Terre" width="30" height="30" />
                                    <div className="or">
                                        <div className="bla">
                                            <div className="bky">
                                                <small className="zc asz">12 min</small>
                                                    <h6>Jacob Thornton</h6>
                                            </div>
                                        <p>
                                            Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
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

