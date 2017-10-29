import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Signup from '../pages/Signup';
import SignupEnterprise from '../pages/SignupEnterprise';

export default class Rol extends React.Component{
       render(){
        return(
            <div className="text-center">
            <div className="container"> <h4 className="title"> Choose your Count</h4> </div>
            <div className="signup">
            <p>
                <Link to="/signupenterprise">
                <Button className="btn btn-success">
                    Want to Contrate
                    </Button>
                </Link>
            </p>
            <p>
                <Link to="/signup">
                <Button className="btn btn-primary">
                    Want to Work
                    </Button>
                </Link>
            </p>
            </div>
          </div>
        );
    }
}