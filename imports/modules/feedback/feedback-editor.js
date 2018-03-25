import { Bert } from 'meteor/themeteorchef:bert';
import { upsertFeedback } from '../../api/feedbacks/methods';
import '../validation.js';

let component;

const handleUpsert = () => {
    const { doc } = component.state;
    const confirmation = doc && doc._id ? 'Datos actualizados correctamente' : 'Datos guardados con éxito';
    const upsert = {
        //userworker: userworker.trim(),
        //userowner: userbusines.trim(),
        //proyectId: proyectId.trim(),
        skillsName: component.state.selectedSkill,
        skillsStar: component.state.selectedStar,
        comments: document.querySelector('[name="comments"]').value.trim(),
        date: new Date(),
    };

    if (doc && doc._id) upsert._id = doc._id;

    upsertFeedback.call(upsert => {
        component.feedbackEditorForm.reset();
        Bert.alert(confirmation, 'success');
        component.props.history.push('/feedbacks');

    });
};

const validate = () => {
    $(component.feedbackEditorForm).validate({
        submitHandler() { handleUpsert(); },
    });
};

export default function feedbackEditor(options) {
    component = options.component;
    validate();
}