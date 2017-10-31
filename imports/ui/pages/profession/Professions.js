import React, { Component,PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

import ProfessionsList from '../../containers/profession/ProfessionsList';
import SkillsList from '../../containers/profession/ViewProfession';

export default class Professions extends Component{
  constructor(props){
    super(props);  
    this.state={
      selectedProf:'',
      openSkill: false,
    }
  }
  selectedProf(idprof){
    console.log('idprof',idprof._str);
    this.setState({
      selectedProf : idprof._str
    });
  }
  handleOpenSkill(event){
    this.setState({
      openSkill : true
    });
    setTimeout(() => {console.log(this.state.openSkill)}, 50)
  }
    render(){
      const {openSkill} = this.state;   
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
           {openSkill && <SkillsList selectedProf={this.state.selectedProf} />}
          </Col>
        </Row>
      </div>        
      );
    }
}
