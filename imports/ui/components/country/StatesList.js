import React, { Component,PropTypes } from 'react';
import { Button, Alert } from 'react-bootstrap'; 

export default class StatesList extends Component{
    constructor(props){
    super(props); 
    }
    render(){
        const { states } = this.props.countr;
             return ( 
                <div className="states">{states.map((state,index) => (
                    <Button key={index}
                            name={state}
                            ref={state}
                            onClick={() => {this.props.selectState(state);}}
                    >
                    { state }
                    </Button>
                ))}</div>
        )
    }
}
{/* className={"btn " + (selectedButton ? 'btn-success' : 'btn-info')}  */}
