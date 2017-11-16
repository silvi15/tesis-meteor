import React, { Component,PropTypes } from 'react';
import { Button, Alert } from 'react-bootstrap'; 

export default class SkillsList extends Component{
    constructor(props){
    super(props); 
    }
    render(){
        //const { selectSkill } = this.props;
        const { skills } = this.props.prof;
             return ( 
                <div className="skills">{skills.map((skill,index) => (
                    <Button key={index}
                            name={skill}
                            ref={skill}
                            onClick={() => {this.props.selectSkill(skill);}}
                    >
                    { skill }
                    </Button>
                ))}</div>
        )
    }
}
{/* className={"btn " + (selectedButton ? 'btn-success' : 'btn-info')}  */}
