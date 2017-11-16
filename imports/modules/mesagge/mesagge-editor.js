import { Bert } from 'meteor/themeteorchef:bert';
import { upsertMesagge } from '../../api/mesagge/methods';
import '../validation';
let component;

const handleUpsert = () => {
  const { msg } = component.props;
  const confirmation = msg && msg._id ? 'Mesagge sended!' : 'Mesagge sended!';
  const upsert = {
    to: document.querySelector('[name="to"]').value.trim(),
    body: document.querySelector('[name="body"]').value.trim(),
};

  if (msg && msg._id) upsert._id = msg._id;

  upsertMesagge.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.mesaggeEditorForm.reset();
      Bert.alert(confirmation, 'success');
      component.props.history.push(`/mesagges/${response.insertedId || msg._id}`);
    }
  });
};

const validate = () => {
  $(component.mesaggeEditorForm).validate({
    rules: {
      to: {
        required: true,
      },
      body: {
          required: true,
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function mesaggeEditor(options) {
  component = options.component;
  validate();
}
