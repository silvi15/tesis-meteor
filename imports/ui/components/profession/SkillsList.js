import React, { Component,PropTypes } from 'react';
import { Button, Alert } from 'react-bootstrap'; 

export default class SkillsList extends Component{
    constructor(props){
    super(props); 
    console.log('hola',props);
    }
    render(){
        let { selectSkill } = this.props;
        let {skills} = this.props.SendProf;
             return (
                skills.length > 0 ? 
                <div>
                    {skills.map(({_id, name}) => (
                        <Button key={_id}
                                style={{margin: "5px"}}
                                name={skills}
                                ref={skills}
                                onClick={() => {selectSkill(name)}}
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