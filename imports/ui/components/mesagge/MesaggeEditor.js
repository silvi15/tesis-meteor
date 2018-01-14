import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import mesaggeEditor from '../../../modules/mesagge/mesagge-editor';

export default class MesaggeEditor extends React.Component {
  componentDidMount() {
    mesaggeEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="to"]').focus(); }, 0);
  }

  render() {
    const { msg } = this.props;
    return (<form
      ref={ form => (this.mesaggeEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>To</ControlLabel>
        <FormControl
          type="text"
          name="to"
          defaultValue={ msg && msg.to }
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Subject</ControlLabel>
        <FormControl
          type="text"
          name="subject"
          defaultValue={ msg && msg.to }
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Body</ControlLabel>
        <FormControl
          componentClass="textarea"
          name="body"
          defaultValue={ msg && msg.body }
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { msg && msg._id ? 'Save Changes' : 'Send Mesagge!' }
      </Button>
    </form>);
  }
}

MesaggeEditor.propTypes = {
  msg: PropTypes.object,
};
