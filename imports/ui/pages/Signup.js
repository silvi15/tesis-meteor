import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button, Textarea } from 'react-bootstrap';
import handleSignup from '../../modules/signup';
import SkillsList from '../containers/skill/SkillsList';
import ProfessionsList from '../containers/profession/ProfessionsList';
const skills = [];

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selectedSkill: [],
      roles: 'worker' 
    }
}  
  
  componentDidMount() {
    handleSignup({ component: this, skills: this.selectedSkill, roles: this.state.roles });
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  //
  selectSkill(name) {
      skills.push(name);
      this.setState({
          selectedSkill: skills
      })
        console.log(this.state.selectedSkill);
     };

  render() {
    
    return (
      <div className="Signup">
        <Row>
          <Col xs={ 12 } sm={ 6 } md={ 4 }>
            <h4 className="text-center">Sign Up - <label> Worker </label> - </h4>
            <form
              ref={ form => (this.signupForm = form) }
              onSubmit={ this.handleSubmit }
            >
              <Row>
                <Col xs={ 12 } sm={ 12 }>
                  <FormGroup>
                    <ControlLabel>
                     <i><span className="fa fa-user-circle-o" aria-hidden="true"></span> </i>
                       First Name
                    </ControlLabel>
                    <FormControl
                      type="text"
                      ref="firstName"
                      name="firstName"
                      placeholder="First Name"
                    />
                  </FormGroup>
                </Col>
                <Col xs={ 12 } sm={ 12 }>
                  <FormGroup>
                    <ControlLabel>
                    <i><span className="fa fa-user-o" aria-hidden="true"></span> </i>
                    Last Name</ControlLabel>
                    <FormControl
                      type="text"
                      ref="lastName"
                      name="lastName"
                      placeholder="Last Name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>
                    <i><span className="fa fa-calendar" aria-hidden="true"></span> </i>
                    Date of birthday</ControlLabel>
                    <FormControl
                      type="date"
                      ref="birthday"
                      name="birthday"
                      placeholder="date of birthday"
                    />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>
                    <i><span className="fa fa-list" aria-hidden="true"> </span> </i>
                      Profile 
                    </ControlLabel>
                    <FormControl
                      style={{height: '200px'}}
                      type="textarea"
                      ref="profiled"
                      name="profiled"
                      placeholder="describe your profile"
                    />
                  </FormGroup>   
                  <FormGroup>
                    <ControlLabel>
                    <i><span className="fa fa-briefcase" aria-hidden="true"></span> </i>
                    Profession
                    </ControlLabel>
                    <ProfessionsList />
                  </FormGroup>                  
                  <FormGroup>
                  <ControlLabel>
                  <i><span className="fa fa-wrench" aria-hidden="true"></span> </i>
                  Skills</ControlLabel>
                  <SkillsList selectSkill={this.selectSkill.bind(this)}/> 
                  </FormGroup>
                   
                  </Col>
              </Row>
              <FormGroup>
                <ControlLabel>
                <i><span className="fa fa-envelope" aria-hidden="true"></span> </i>
                Email Address</ControlLabel>
                <FormControl
                  type="text"
                  ref="emailAddress"
                  name="emailAddress"
                  placeholder="Email Address"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>
                <i><span className="fa fa-key" aria-hidden="true"> </span> </i>
                Password</ControlLabel>
                <FormControl
                  type="password"
                  ref="password"
                  name="password"
                  placeholder="Password"
                />
              </FormGroup>
              <Button type="submit" bsStyle="success">Sign Up</Button>
            </form>
            <p>Already have an account? <Link to="/login">Log In</Link>.</p>
          </Col>
        </Row>
      </div>
    );
  }
}
