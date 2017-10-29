import React, { Component,PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import ProfessionsList from '../../containers/profession/ProfessionsList';
import SkillsList from '../../containers/skill/SkillsList';

export default class Professions extends Component{
  constructor(props){
    super(props);  
    this.state={
      selectedProf:'',
      openSkill: false,
    }
  }
  // pasar esta fc como propiedad al hijo desde el padre
  selectedProf(idprof){
    console.log('idprof',idprof._str);
    this.setState({
      selectedProf : idprof._str
    });
  }
  handleOpenSkill(event){
    event.preventDefault();
    this.setState({
      openSkill : true
    });
  }
  renderOpenSkill(){
    if(this.state.openSkill){
      return <SkillsList selectedProf={this.selectedProf.bind(this)}/>
    }
  }
    render(){
      return(
        <div className="Professions"> 
        <Row>
          <Col xs={ 12 }>
            <div className="page-header clearfix">
             <div className="container"> <h2 className="pull-left">Professions</h2> </div>
              <Link to="/professions/new">
                <Button className="btn btn-primary">
                New Professions</Button>
              </Link>
            </div>
            <ProfessionsList selectedProf={this.selectedProf.bind(this)}
                             onOpenSkill={this.handleOpenSkill.bind(this)}/>
           {this.renderOpenSkill()}
          </Col>
        </Row>
      </div>        
      );
    }
}
/**
const Professions = () => (
<div className="Professions"> 
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
         <div className="container"> <h2 className="pull-left">Professions</h2> </div>
          <Link to="/professions/new">
            <Button className="btn btn-primary">
            New Professions</Button>
          </Link>
        </div>
        <ProfessionsList />
        <SkillsList />
      </Col>
    </Row>
  </div>
);

export default Professions;
 
 */
