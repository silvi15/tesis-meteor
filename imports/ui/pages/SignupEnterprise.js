import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button, Textarea } from 'react-bootstrap';
import handleSignupEnterprise from '../../modules/signup-enterprise';


export default class SignupEnterprise extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      roles: ['enterprise'],
    }
}  
  componentDidMount() {
    handleSignupEnterprise({ component: this, roles: this.state.roles });
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    
    return (
      <div className="Signup">
        <Row>
          <Col xs={ 12 } sm={ 6 } md={ 4 }>
            <h4 className="text-center"> Sign Up - <label> Enterprise </label> </h4>
            <form
              ref={ form => (this.signupFormEnterprise = form) }
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
                     <i><span className="fa fa-envelope" aria-hidden="true"></span> </i>
                       Email
                    </ControlLabel>
                    <FormControl
                      type="text"
                      ref="emailAddress"
                      name="emailAddress"
                      placeholder="Please emailAddress"
                    />
                  </FormGroup>
              <FormGroup>
                <ControlLabel>
                <i><span className="fa fa-key" aria-hidden="true"></span> </i>
                Password</ControlLabel>
                <FormControl
                  type="password"
                  ref="password"
                  name="password"
                  placeholder="Password"
                />
              </FormGroup>
              </Col></Row>
              <Button type="submit" bsStyle="success">Sign Up</Button>
            </form>
            <p>Already have an account? <Link to="/login">Log In</Link>.</p>
          </Col>
        </Row>
      </div>
    );
  }
}
