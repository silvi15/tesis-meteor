import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import countryEditor from '../../../modules/country/country-editor';

export default class CountryEditor extends React.Component {
  componentDidMount() {
    countryEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="name"]').focus(); }, 0);
  }

  render() {
    const { countr } = this.props;
    return (<form
      ref={ form => (this.countryEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel> Name </ControlLabel>
        <FormControl
          type="text"
          name="name"
          defaultValue={ countr && countr.name }
          placeholder="write the country...please"
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { countr && countr._id ? 'Save Changes' : 'Add Country' }
      </Button>
    </form>);
  }
}

CountryEditor.propTypes = {
  countr: PropTypes.object,
};
