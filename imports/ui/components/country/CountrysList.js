import React, { Component,PropTypes } from 'react';
import { Button, Alert } from 'react-bootstrap'; 

function searchingFor(term){
    return function(x){
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

export default class CountrysList extends Component{
    constructor(props){
    super(props);
    this.state = {
          passCountryToParent : '',
          countr: this.props.countr,
          term: '',
    }    
    this.searchHandler = this.searchHandler.bind(this);
    }
    searchHandler(event){
        this.setState({
            term : event.target.value
        });
    }
    selectCountry(namecountry){
        this.setState({
            term: namecountry
        });
    }
    render(){ 
        const { term, countr} = this.state; 
        const { onOpenState } = this.props; 
             return (
                <div>
                    <input
                        type="text"
                        ref="countr"
                        name="countr"
                        placeholder="please put country"
                        onChange={this.searchHandler}
                        value = {term}
                    />
                
                {term ? countr.filter(searchingFor(term)).map(country => 
                    <div
                        key={country._id}
                        onClick={()=>{this.selectCountry(country.name);
                                      this.props.selectedCountry(country._id);
                                      onOpenState();
                                      }}
                    >
                        <h1>{ country.name }</h1>
                    
                    </div>
                   
                ) : <Alert> There is no coincidence  </Alert>}
                </div>               
        );
    }
}
{/* className={"btn " + (selectedButton ? 'btn-success' : 'btn-info')}  */}