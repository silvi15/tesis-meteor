import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import professionEditor from '../../../modules/profession/profession-editor';

export default class ProfessionEditor extends React.Component {
  /* se invoca despues de montar el componente, -> lo vemos despues en el render */ 
  componentDidMount() {
    professionEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="name"]').focus(); }, 0);
  }

  render() {
    const { prof } = this.props;
    return (<form
      ref={ form => (this.professionEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel> Name </ControlLabel>
        <FormControl
          type="text"
          name="name"
          defaultValue={ prof && prof.name }
          placeholder="write the professions...please"
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { prof && prof._id ? 'Save Changes' : 'Add Professions' }
      </Button>
    </form>);
  }
}

ProfessionEditor.propTypes = {
  prof: PropTypes.object,
};
