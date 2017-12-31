import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Row, Col, Button } from 'react-bootstrap';
export default class FindPeople extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        user: Meteor.users.findOne(Meteor.userId())
    }
}
render(){
    return (
            <div className="search">
            <div className="container"> <input type="text" className="form-control" placeholder="Search for..." aria-label="Search for..."/> </div>
            <div className="text-center">
            <img src="/img/avatar-men.jpg" className="img-circle" alt="Cinque Terre" width="304" height="236"/>
            <div>
            <button type="button" className="btn btn-outline-secondary"> <span className="glyphicon glyphicon-chevron-left"></span>  </button>
            <button type="button" className="btn btn-outline-secondary"> <span className="glyphicon glyphicon-refresh"></span>  </button>         
            <button type="button" className="btn btn-outline-secondary"> <span className="glyphicon glyphicon-chevron-right"></span>  </button>
            </div>
            <div className="media-body">
                <h5 className="mt-0">@Jhon</h5>
                <p> Developer</p>
                <p className="mb-0">
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star-empty"></span>
                    <span className="glyphicon glyphicon-star-empty"></span>
                </p>
                <div className="container">
                    <Button  className="btn btn-primary">  <span className="glyphicon glyphicon-ok"></span> </Button>
                    <Button  className="btn btn-default">  <span className="glyphicon glyphicon-remove"></span> </Button>
                </div>
            </div>
        </div>
    </div>
          
    );
}
}
