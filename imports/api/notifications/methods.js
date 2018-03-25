import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Notifications from './notifications';
import rateLimit from '../../modules/rate-limit.js';

export const upsertNotification = new ValidatedMethod({
    name: 'notifications.upsert',
    validate: new SimpleSchema({
        _id: { type: String, optional: true },
        date: { type: Date, optional: true },
        userowner: { type: String, optional: true },
        userPostulate: {type: String, optional: true},
        projectId: {type: String, optional: true},
        state: { type: String, optional: true },
        path: { type: String, optional: true },
        
    }).validator(),
    run(notification) {
        return Notifications.upsert({ _id: notification._id }, { $set: notification });
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


rateLimit({
    methods: [
        upsertNotification,
        removeNotification,
    ],
    limit: 5,
    timeRange: 1000,
});
