import { Bert } from 'meteor/themeteorchef:bert';
import { upsertNotification } from '../../api/projects/methods.js';
import '../validation.js';
import uuid from 'uuid';

let component;

const handleUpsert = () => {
    const { not } =  component.props;
    const confirmation = not && not._id ? 'Notification Updated' : 'Add Notification';
    const upsert = {
        notifications:{
            userpostulate: component.state.userpostulate,
            userowner: component.state.userowner,
            projectid: component.state.projectid,
            statenot: 'new',
            date: new Date(),
        },
    };
    if(not && not._id) {
        upsert.notifications._id = not._id;
    }else{
        upsert.notifications._id= uuid.v4();
    }
    upsertNotification.call(upsert,(error, response) => {
        if(error){
            Bert.alert(error.reason,'danger');
        }else{
            component.notificationEditForm.reset();
            Bert.alert(confirmation,'success');
            component.props.history.push(`/projects/${response.insertId || not._id}`);
        }
    });
};
const validate = () => {
    $(component.notificationEditForm).validate({
        rules: {
            userowner: {
                required: true,
            },
            userpostulate: {
                required: true,
            },
            projectid: {
                required: true,
            },
            date: {
                required: true,
            },
            statenot:{
                required: true,
            },
        },
        submitHandler(){ handleUpsert(); },
    });
};
export default function notificationEditor(options){
    component = options.component;
    console.log('component ', component);
    validate();
}