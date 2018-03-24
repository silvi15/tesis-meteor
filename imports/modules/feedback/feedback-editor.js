import { Bert } from 'meteor/themeteorchef:bert';
import { upsertFeedback } from '../../api/feedbacks/methods';
import '../validation.js';

let component;

const handleUpsert = () => {
    const { doc } = component.state;
    console.log("props ", component.props)
    const confirmation = doc && doc._id ? 'Datos actualizados correctamente' : 'Datos guardados con éxito';
    const upsert = {
        //userworker: userworker.trim(),
        //userowner: userbusines.trim(),
        //proyectId: proyectId.trim(),
        skills: component.state.selectedSkill,
       // "skillsRanking": doc.skillsRanking.trim(),
        comments: document.querySelector('[name="comments"]').value.trim(),
        date: new Date(),
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
            
        },
        messages: {
            commenst: {
                required: 'Ingrese algun comentario',
            },
            
        },
        submitHandler() { handleUpsert(); },
    });
};

export default function feedbackEditor(options) {
    component = options.component;
    validate();
}