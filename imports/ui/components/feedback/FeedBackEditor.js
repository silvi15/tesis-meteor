import React, { PropTypes, Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import feedbackEditor from '../../../modules/feedback/feedback-editor';
import SkillsList from '../../containers/profession/ViewProfession';

export default class FeedBackEditor extends Comment {
    state = {
        doc: {
            _id: '',
            userworker: '',
            userbusines: '',
            skills: [],
            comments: '',
        },
        skill: '',
        selectedSkill:'',
    }
    componentDidMount(){
        feedbackEditor({ component: this});
        if(this.props.doc){
            this.setState({
                doc: this.props.doc
            });
        }
    }
    onChangeDoc = e => {
        this.setState({
            doc: {...this.state.doc, [e.target.name]:e.target.value }
        })
    }
    selectSkill (name) {
        skills.push(name);
        this.setState({
            selectedSkill: skills
        })
    }
    render() {
        const { _id, userworker, userbusines, skills, comments } = this.state.doc;
        const { skill } = this.state;
        return(
            <form
            ref={form => (this.feedBackEditorForm = form)}
            onSubmit={event => event.preventDefault()}
          >
            <FormGroup>
            <ControlLabel></
            </FormGroup>
            <FormGroup>
              <ControlLabel>Comments</ControlLabel>
              <FormControl
                type="text"
                name="comments"
                value={comments}
                onChange={this.onChangeDoc}
                placeholder="Plesea put something about de work"
              />
            </FormGroup>
            <FormGroup>
            <SkillsList selectSkill={this.selectSkill.bind(this)} />
            </FormGroup>
            <Button type="submit" bsStyle="success">
              {doc && doc._id ? 'Save Changes' : 'Send FeedBack!'}
            </Button>
          </form>);
    }
}
