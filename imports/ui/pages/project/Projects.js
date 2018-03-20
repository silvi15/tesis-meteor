import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import { Row, Col, Button } from 'react-bootstrap';
import ProjectsList from '../../containers/project/ProjectsList.js';
import projectEditor from '../../../modules/project/project-editor';

export default class Projects extends Component {
    constructor(props){
      super(props);
    }
    render(){
      const showEnterprise = Roles.userIsInRole(Meteor.userId(),['enterprise']);
      //const {user} = this.state;
      return(
        <div className="Projects">  
        <Row>
          <Col xs={ 12 }>
            <div className="page-header clearfix">
             <div className="container"> <h3 className="pull-left"><label> Project</label> </h3> </div>
               
              <Link to="/projects/new">
                <Button className="btn btn-primary">
                New Project</Button>
              </Link>
            
            </div>
            <ProjectsList /*selectedProject={this.selectedProject.bind(this)}*/ />
          </Col>
        </Row>
      </div>
      );
    }
}
