import React, { Component,PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

import CountrysList from '../../containers/country/CountrysList';
{/* import StatesList from '../../containers/country/StatesList'; */}

export default class Countrys extends Component{
  constructor(props){
    super(props);  
    this.state={
      selectedCountry:'',
      openState: false,
    }
  }
  selectedCountry(idcountry){
   {/* console.log('idcountry',idcountry); */}
    this.setState({
      selectedCountry : idcountry
    });
  }
  handleOpenState(event){
    this.setState({
      openState : true
    });
   {/* setTimeout(() => {console.log(this.state.openSkill)}, 50) */}
  }
    render(){
      const {openState} = this.state;   
      return(
        <div className="Countrys"> 
        <Row>
          <Col xs={ 12 }>
            <div className="page-header clearfix">
             <div className="container"> <h2 className="pull-left">Countrys</h2> </div>
              <Link to="/countrys/new">
                <Button className="btn btn-primary">
                New Countrys</Button>
              </Link>
            </div>
            {/*
            <CountrysList selectedCountry={this.selectedCountry.bind(this)}
                             onOpenState={this.handleOpen.bind(this)}/>
           {openState && <StatesList selectedCountry={this.state.selectedCountry} />} 
           */}
              
          </Col>
        </Row>
      </div>        
      );
    }
}
