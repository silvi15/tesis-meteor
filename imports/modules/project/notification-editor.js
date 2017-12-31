import { Bert } from 'meteor/themeteorchef:bert';
import { upsertNotification } from '../../api/projects/methods.js';
import '../validation.js';
import uuid from 'uuid';

let component;

const handleUpsert = () => {
    const { notification } =  component.state;
    console.log('not',notification);
    const confirmation = notification && notification._id ? 'Notification Updated' : 'Add Notification';
    const upsert = {
        notifications:{
            userpostulate: notification.userpostulate,
            userowner: notification.userowner,
            projectid: notification.selectedProject,
            statenot: 'new',
            date: new Date(),
        },
    };
    if(notification && notification._id) {
        upsert.notifications._id = notification._id;
    }else{
        upsert.notifications._id= uuid.v4();
    }
    console.log("Upsert: ", upsert);
    upsertNotification.call(upsert,(error, response) => {
        if(error){
            Bert.alert(error.message,'danger');
        }else{
            component.notificationEditForm.reset();
            Bert.alert(confirmation,'success');
            component.props.history.push(`/projects/${response.insertId || notification._id}`);
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