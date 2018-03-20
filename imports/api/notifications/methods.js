import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Notifications from './notifications';
import rateLimit from '../../modules/rate-limit.js';

export const upsertNotification = new ValidatedMethod({
    name: 'notifications.upsert',
    validate: new SimpleSchema({
        _id: { type: String, optional: true },
        createdAt: { type: Date, optional: true },
        userOwner: { type: String, optional: true },
        type: { type: String, optional: true },
        usersDestination: { type: [String], optional: true },
        state: { type: String, optional: true },
        "body.title": { type: String, optional: true },
        "body.message": { type: String, optional: true },
        path: { type: String, optional: true },
        blank: { type: Boolean, optional: true },
        "doneBy.userName": { type: String, optional: true },
        "doneBy.userId": { type: String, optional: true }
    }).validator(),
    run(notification) {
        return Notifications.upsert({ _id: notification._id }, { $set: notification });
    },
});
export const setNotificationOpened = new ValidatedMethod({
    name: 'notifications.setOpened',
    validate: new SimpleSchema({
        _id: { type: String, optional: true },
        createdAt: { type: Date, optional: true },
        userOwner: { type: String, optional: true },
        type: { type: String, optional: true },
        usersDestination: { type: [String], optional: true },
        state: { type: String, optional: true },
        "body.title": { type: String, optional: true },
        "body.message": { type: String, optional: true },
        path: { type: String, optional: true },
        blank: { type: Boolean, optional: true },
        "doneBy.userName": { type: String, optional: true },
        "doneBy.userId": { type: String, optional: true }
    }).validator(),
    run(not) {
        return Notifications.update({ _id: not._id }, { $set: { state: 'opened' } });
    },
});
export const toggleNotificationState = new ValidatedMethod({
    name: 'notifications.toggleState',
    validate: new SimpleSchema({
        _id: { type: String },
        state: { type: String },
        "doneBy.userName": { type: String, optional: true },
        "doneBy.userId": { type: String, optional: true }
    }).validator(),
    run(not) {
        Notifications.update({ _id: not._id }, { $set: { state: not.state, doneBy: not.doneBy } });
        return not.state;
    },
});
export const removeNotification = new ValidatedMethod({
    name: 'notifications.remove',
    validate: new SimpleSchema({
        _id: { type: String },
    }).validator(),
    run({ _id }) {
        Notifications.remove(_id);
    },
});

export const doneNotification = new ValidatedMethod({
    name: 'notifications.setDone',
    validate: new SimpleSchema({
        _id: { type: String, optional: true },
        state: { type: String, optional: true },
        "doneBy.userName": { type: String, optional: true },
        "doneBy.userId": { type: String, optional: true }
    }).validator(),
    run(not) {
        return Notifications.update(
            { _id: not._id },
            { $set: { state: not.state, doneBy: not.doneBy } });
    },
});

rateLimit({
    methods: [
        upsertNotification,
        removeNotification,
    ],
    limit: 5,
    timeRange: 1000,
});
