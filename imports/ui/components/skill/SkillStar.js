import React, { Component, PropTypes } from 'react';
import { Button, Alert } from 'react-bootstrap';
import ReactStars from 'react-stars'

export default class SkillStar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            star: '',
        }
    }
    
    render() {
        //const { selectSkill } = this.props;
        const { skills } = this.props;
       // const { star } = this.state;
        return (
            <div className="skills">{skills.map((skill, index) => (
                <Button key={index}
                    name={skill}
                    ref={skill}
                    onClick={() => { this.props.selectSkill(skill); }}
                >
                    {skill}
                </Button>
            ))}</div>
        )
    }
}
{/* className={"btn " + (selectedButton ? 'btn-success' : 'btn-info')}  */ }
