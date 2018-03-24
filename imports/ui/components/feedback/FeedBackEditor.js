import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import feedbackEditor from '../../../modules/feedback/feedback-editor';
import ProfessionsList from '../../containers/profession/ProfessionsList';
import SkillsList from '../../containers/profession/ViewProfession';

const skills = [];

export default class FeedBackEditor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                selectedProf:'',
                selectedSkill: [],
                openSkill: false,
                comments: '',
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
    };
    render() {
        const { doc } = this.props;
        const { selectedProf, selectedSkill, openSkill, comments } = this.state;
        return (<form
            ref={form => (this.feedbackEditorForm = form)}
            onSubmit={event => event.preventDefault()}
        >
            <FormGroup>
                <ControlLabel>Comments</ControlLabel>
                <FormControl
                    type="text"
                    name="comments"
                    defaultValue={ doc && doc.comments }
                    onChange={this.onChangeDoc}
                    placeholder="Please put your experince..."
                />
            </FormGroup>
            <FormGroup>
                <ControlLabel>
                    <i><span className="fa fa-briefcase" aria-hidden="true"></span> </i>
                    Profession
          </ControlLabel>
                <ProfessionsList selectedProf={this.selectedProf.bind(this)}
                    onOpenSkill={this.handleOpenSkill.bind(this)} />
                {openSkill && <SkillsList selectSkill={this.selectSkill.bind(this)}
                    selectedProf={this.state.selectedProf} />}
            </FormGroup>
            <Button type="submit" bsStyle="success">
                {doc && doc._id ? 'Save Changes' : 'Add calification!'}
            </Button>
        </form>);
    }
}

FeedBackEditor.propTypes = {
    doc: PropTypes.object,
};

