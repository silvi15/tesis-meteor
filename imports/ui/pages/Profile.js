import React, { Component, PropTypes } from 'react';
import { Link, } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Row, Col, Button } from 'react-bootstrap';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: Meteor.users.findOne(Meteor.userId()),
        }
    }

    render() {
        const { user } = this.state;
        const showWorkers = Roles.userIsInRole(Meteor.userId(), ['worker']);
        const showEnterprise = Roles.userIsInRole(Meteor.userId(), ['enterprise']);
        const showAdmin = Roles.userIsInRole(Meteor.userId(), ['admin']);
        const skills = user && user.profile && user.profile.name && user.profile.skills.name || [];
        console.log('worker', showWorkers);
        console.log('enter', showEnterprise);
        return (
            <div className="profile">
                <div className="text-center">
                    {showAdmin && <div> </div> || <div> </div>}
                    {showEnterprise && <div></div> || <div></div>}


                </div>
                <div className="fondo">
                    <div className="portada">
                        <img src="/img/avatar.png" className="avatar" />
                    </div>
                </div>
                <div className="personal-info">
                    <h4>Personal Information</h4>
                    <div className="name">
                        <h5><i><span className="fa fa-user-circle-o" aria-hidden="true"></span> </i>

                            {user.profile.name.first}, {user.profile.name.last}
                        </h5>
                        {showWorkers &&
                            <h5><i><span className="fa fa-birthday-cake" aria-hidden="true"></span> </i>
                                {user.profile.birthday.day}
                            </h5>
                            || <div></div>}
                        {showWorkers &&
                            <h5><i><span className="fa fa-phone" aria-hidden="true"></span> </i>
                                {user.profile.celphone.number}  </h5>
                            || <div></div>}
                        {showWorkers &&
                            <h5><i><span className="fa fa-location-arrow" aria-hidden="true"></span> </i>

                            {user.profile.address.name}

                            </h5>
                            || <div></div>}
                        <h5><i><span className="fa fa-envelope-o" aria-hidden="true"></span> </i>
                            {user.emails[0].address} </h5>
                    </div>
                    <i><Button className="mensaje"><span className="fa fa-envelope-o" aria-hidden="true"> </span></Button></i>
                </div>
                {showWorkers &&
                    <div className="profession">
                        <h4>Profile</h4>
                        <h5><i><span className="fa fa-briefcase" aria-hidden="true"></span> </i>
                            {user.profile.profession.name} </h5>
                        <h5><i><span className="fa fa-list" aria-hidden="true"> </span> </i>
                            {user.profile.profiled.name}  </h5>
                    </div>
                    || <div></div>}
                <div className="skills" >
                    <h4>Skills</h4>

                    {skills.map((name, index) => {
                        return (<Button key={index} type="button" className="btn btn-primary">
                            {name}
                            <p><span className="glyphicon glyphicon-star-empty"></span></p>
                        </Button>
                        )
                    })}

                </div>

                <div className="comments">
                    <h4>Comments</h4>
                    
                    <img src="/img/avatar.png" className="img-circle" alt="Cinque Terre" width="30" height="30" />
                    <div className="or">
                        <div className="bla">
                            <div className="bky">
                                <small className="zc asz">12 min</small>
                                <h6>Martin</h6>
                            </div>
                            <p>
                            You are an excelent employer! see you in the next project
                                        </p>
                        </div> 
                    </div>
                    
                </div>
            </div>
        );
    }
}

