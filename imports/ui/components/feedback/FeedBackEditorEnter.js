import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import feedbackEditor from '../../../modules/feedback/feedback-editor';
import ProfessionsList from '../../containers/profession/ProfessionsList';
import SkillsListStar from '../../containers/profession/ViewProfStar';
import ReactStars from 'react-stars'

import SkillsList from '../../containers/skill/SkillsList';


const skills = [];
const stars = [];
export default class FeedBackEditorEnter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                selectedProf:'',
                selectedSkill: [],
                openSkill: false,
                comments: '',
                selectedStar:[],
        }
    }
    componentDidMount() {
        feedbackEditor({ component: this });
        if (this.props.doc) {
            this.setState({
                doc: this.props.doc
            });
        }
    }
    /*
    onChangeDoc = e => {
        this.setState({
            doc: { ...this.state.doc, [e.target.name]: e.target.value }
        })
    }
    */
    selectedProf(idProf) {
        this.setState({
            selectedProf: idProf
        });
    }
    handleOpenSkill(event) {
        this.setState({
            openSkill: true
        });
    }
    selectSkill(name) {
        skills.push(name);
        this.setState({
            selectedSkill: skills
        })
        console.log('selecskill', this.state.selectedSkill);
    }
    ratingChanged(star) {
        console.log('starttt', star);
        stars.push(star);
        this.setState({
            selectedStar: stars
        })
        console.log('selectstar', this.state.selectedStar)
    }
    
    render() {
        const { doc } = this.props;
        const { selectedProf, selectedSkill, openSkill, comments, selectedStar } = this.state;
        return (<form
            ref={form => (this.feedbackEditorForm = form)}
            onSubmit={event => event.preventDefault()}
        >
            <FormGroup>
                <ControlLabel>Comments</ControlLabel>
                <FormControl
                    componentClass="textarea"
                    name="comments"
                    defaultValue={ doc && doc.comments }
                    onChange={this.onChangeDoc}
                    placeholder="Please put your experince..."
                />
            </FormGroup>
            {/*
            <FormGroup>
                <ControlLabel>
                    <i><span className="fa fa-briefcase" aria-hidden="true"></span> </i>
                    Profession
          </ControlLabel>
                <ProfessionsList selectedProf={this.selectedProf.bind(this)}
                    onOpenSkill={this.handleOpenSkill.bind(this)} />
                {openSkill && <SkillsListStar selectSkill={this.selectSkill.bind(this)}
                    selectedProf={this.state.selectedProf}
                    ratingChanged={this.ratingChanged.bind(this)} />}
            </FormGroup>
            */}
            <SkillsList />
            
            <Button type="submit" bsStyle="success">
                {doc && doc._id ? 'Save Changes' : 'Add calification!'}
            </Button>
        </form>);
    }
}

FeedBackEditor.propTypes = {
    doc: PropTypes.object,
};

