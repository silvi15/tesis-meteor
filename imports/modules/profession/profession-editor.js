/* eslint-disable no-undef */

import { Bert } from 'meteor/themeteorchef:bert';
import { upsertProfession } from '../../api/professions/methods';
import '../validation';
let component;

const handleUpsert = () => {
  const { prof } = component.props;
  const confirmation = prof && prof._id ? 'Profession updated!' : 'Profession added!';
  const upsert = {
    name: document.querySelector('[name="name"]').value.trim(),
  };

  if (prof && prof._id) upsert._id = prof._id;

  upsertProfession.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.professionEditorForm.reset();
      Bert.alert(confirmation, 'success');
      component.props.history.push(`/professions/${response.insertedId || prof._id}`);
    }
  });
};

const validate = () => {
  $(component.professionEditorForm).validate({
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

export default function professionEditor(options) {
  component = options.component;
  validate();
}
