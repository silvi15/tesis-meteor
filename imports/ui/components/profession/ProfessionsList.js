import React, { Component,PropTypes } from 'react';
import { Button, Alert } from 'react-bootstrap'; 

function searchingFor(term){
    return function(x){
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

export default class ProfessionsList extends Component{
    constructor(props){
    super(props);
    this.state = {
          professions: this.props.professions,
          term: '',
    }    
    this.searchHandler = this.searchHandler.bind(this);
    }
    searchHandler(event){
        this.setState({
            term : event.target.value
        });
    }
    selectProf(nameprof){
        this.setState({
            term: nameprof
        });
    }
    render(){ 
        const { term, professions} = this.state; 
        const { onOpenSkill } = this.props; 
             return (
                <div>
                    <input
                        type="text"
                        ref="profession"
                        name="profession"
                        placeholder="please put profession"
                        onChange={this.searchHandler}
                        value = {term}
                    />
                
                {term ? professions.filter(searchingFor(term)).map(prof => 
                    <div
                        key={prof._id}
                        onClick={()=>{this.selectProf(prof.name);
                                      this.props.selectedProf(prof._id);
                                      onOpenSkill();
                                      }}
                    >
                        <h1>{ prof.name }</h1>
                    
                    </div>
                   
                ) : <Alert> There is no coincidence  </Alert>}
                </div>               
        );
    }
}
{/* className={"btn " + (selectedButton ? 'btn-success' : 'btn-info')}  */}