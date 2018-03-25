import React, { Component, PropTypes } from 'react';
import { Button, Alert } from 'react-bootstrap';
import ReactStars from 'react-stars'
export default class SkillsListStar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            star: '',
        }
    }
    
    render() {
        //const { selectSkill } = this.props;
        const { skills, star } = this.props.prof;
        //const { star } = this.state;
        return (
            <div className="skills">{skills.map((skill, index) => (
                <Button 
                    key={index}
                    name={skill}
                    ref={skill}
                    onClick={() => { this.props.selectSkill(skill); }}

                >
                    {skill}
                    <ReactStars 
                        name={star}
                        value={star}
                        onChange={this.props.ratingChanged}
                        onClick= { () => { this.props.ratingChanged(star); }}
                        count={5}
                        size={24} />
                </Button>
            ))}</div>
        )
    }
}
{/* className={"btn " + (selectedButton ? 'btn-success' : 'btn-info')}  */ }
