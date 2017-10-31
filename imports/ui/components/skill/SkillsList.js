import React, { Component,PropTypes } from 'react';
import { Button, Alert } from 'react-bootstrap'; 

export default class SkillsList extends Component{
    constructor(props){
    super(props); 
    console.log('hola desde skills list');
    }
    render(){
        let { selectSkill, skills } = this.props;
      {/*  let {skills} = this.props.onSendProf; */} 
             return (
                skills.length > 0 ? 
                <div>
                    {skills.map(({_id, name}) => (
                        <Button key={_id}
                                style={{margin: "5px"}}
                                name={skills}
                                ref={skills}
                                onClick={() => {selectSkill(name);}}
                        >
                                { name }
                        </Button>
                    ))}
                </div>
                :
            <Alert bsStyle="warning">No Skills yet.</Alert>
        )
    }
}
{/* className={"btn " + (selectedButton ? 'btn-success' : 'btn-info')}  */}