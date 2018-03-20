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
            userPostulate: notification.userpostulate,
            userOwner: notification.userowner,
            projectId: notification.selectedProject,
            stateNot: 'new',
            date: new Date(),
        },
    };
    if (notification && notification._id) upsert._id = notification._id;
    upsertNotification.call(upsert, (error, response) => {
        if (error) {
            Bert.alert(error.reason, 'danger');
        } else {
            component.notificationEditForm.reset();
            Bert.alert(confirmation, 'success');
            component.props.history.push('/proyects');
        }
    });
};

const validate = () => {
    $(component.notificationEditForm).validate({
        rules: {
            userOwner: {
                required: true,
            },
            userPostulate: {
                required: true,
            },
            projectId: {
                required: true,
            },
            date: {
                required: true,
            },
            stateNot:{
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