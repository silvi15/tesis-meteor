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
    createdAt: {
        type: Date
    },
    // Es el usuario que genera la notificación. Puede ser user_Id o "system"
    userOwner: {
        type: String
    },
    // inactive-user, normal-notification, corporation-request
    type: {
        type: String
    },
    // users Ids
    usersDestination: {
        type: [String]
    },
    // new, opened, complete
    state: {
        type: String
    },
    // Título y mensaje de la notificación
    body: {
        type: Object
    },
    "body.title": {
        type: String
    },
    "body.message": {
        type: String
    },
    "doneBy.userName": {
        type: String,
        optional: true
    },
    "doneBy.userId": {
        type: String,
        optional:true
    },
    path: {
        type: String
    },
    blank: {
        type: Boolean,
        optional: true
    }
})

Notifications.attachSchema(Notifications.schema);
