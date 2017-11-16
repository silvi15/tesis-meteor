/* eslint-disable no-undef */

import { Bert } from 'meteor/themeteorchef:bert';
import { upsertCountry } from '../../api/country/methods';
import '../validation';
let component;

const handleUpsert = () => {
  const { countr } = component.props;
  const confirmation = countr && countr._id ? 'Country updated!' : 'Country added!';
  const upsert = {
    name: document.querySelector('[name="name"]').value.trim(),
  };

  if (countr && countr._id) upsert._id = countr._id;

  upsertCountry.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.countryEditorForm.reset();
      Bert.alert(confirmation, 'success');
      component.props.history.push(`/countrys/${response.insertedId || countr._id}`);
    }
  });
};

const validate = () => {
  $(component.countryEditorForm).validate({
    rules: {
      name: {
        required: true,
      },
    },
    messages: {
      name: {
        required: 'Need a name in here',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function countryEditor(options) {
  component = options.component;
  validate();
}
