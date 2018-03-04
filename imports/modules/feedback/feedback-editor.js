import { Bert } from 'meteor/themeteorchef:bert';
import { upsertSubdependencie } from '../../api/subdependencies/methods';
import '../validation.js';

let component;

const handleUpsert = () => {
    const { doc } = component.state;
    console.log("props ", component.props)
    const confirmation = doc && doc._id ? 'Datos actualizados correctamente' : 'Datos guardados con éxito';
    const upsert = {
        userworker: doc.userworker.trim(),
        userbusines: doc.userbusines.trim(),
        skills: doc.skills.trim(),
        comments: doc.comments.trim(),
    };

    if (doc && doc._id) upsert._id = doc._id;

    upsertFeedback.call(upsert, (error, response) => {
        if (error) {
            Bert.alert(error.reason, 'danger');
        } else {
            component.feedbackEditorForm.reset();
            Bert.alert(confirmation, 'success');
            component.props.history.push('/feedbacks');
        }
    });
};


const validate = () => {
    $(component.feedbackEditorForm).validate({
        rules: {
            comments: {
                required: true,
            },
            skills: {
                required: true,
            },
        },
        messages: {
            commenst: {
                required: 'Ingrese algun comentario',
            },
            skills: {
                required: 'Es necesario dar una puntuación',
            },
        },
        submitHandler() { handleUpsert(); },
    });
};

export default function feedbackEditor(options) {
    component = options.component;
    validate();
}