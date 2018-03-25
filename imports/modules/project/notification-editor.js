import { Bert } from 'meteor/themeteorchef:bert';
import { upsertNotification } from '../../api/notifications/methods';
import '../validation.js';
import uuid from 'uuid';

let component;

const handleUpsert = () => {
    const { notification } = component.state;
    console.log('not', notification);
    const confirmation = notification && notification._id ? 'Notification Updated' : 'Add Notification';
    const upsert = {
        date: new Date(),
        userowner: component.state.userowner,
        userPostulate: component.state.userpostulate,
        projectId: component.state.selectedProject,
        state: 'new',
        
    };
    if (notification && notification._id) upsert._id = notification._id;
    upsertNotification.call(upsert, (error, response) => {
        if (error) {
            Bert.alert(error.reason, 'danger');
        } else {
            component.notificationEditForm.reset();
            Bert.alert(confirmation, 'success');
            component.props.history.push('/notifications');
        }
    });
};

const validate = () => {
    $(component.notificationEditForm).validate({
        submitHandler() { handleUpsert(); },
    });
};
export default function notificationEditor(options) {
    component = options.component;
    console.log('component ', component);
    validate();
}