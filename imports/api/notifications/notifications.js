import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Notifications = new Mongo.Collection('notifications')
export default Notifications

Notifications.allow({
    insert: () => false,
    update: () => false,
    remove: () => false,
})

Notifications.deny({
    insert: () => true,
    update: () => true,
    remove: () => true,
})

Notifications.schema = new SimpleSchema({
    // fecha de creación de la notificación
    date: {
        type: Date
    },
    // Es el usuario que genera la notificación. Puede ser user_Id o "system"
    userowner: {
        type: String,
        optional: true,
    },
    // users Ids
    userPostulate: {
        type: String,
        optional: true,
    },
    proyectId: {
        type: String,
        optional: true,
    },
    // new, opened, complete
    state: {
        type: String,
        optional: true,
    },
    path: {
        type: String,
        optional: true,
    },

})

Notifications.attachSchema(Notifications.schema);
