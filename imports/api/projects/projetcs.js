import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Meteor } from 'meteor/meteor';

const Projects = new Mongo.Collection('Projects');
export default Projects;

Projects.allow({
    insert: () => false,
    update: () => false,
    remove: () => false,
});
Projects.deny({
    insert: () => true,
    update: () => true,
    remove: () => true,
});
Projects.schema = new SimpleSchema({
    name: {
        type: String,
        label: 'The Title of Project'
    },
    desc: {
        type: String,
        label: 'Description of project',
    },
    days:{
        type: String,
        label: 'Quantity of days',
    },
    money: {
        type: String,
        label: 'Price of project',
    },
    skills:{
        type: [String],
        label: 'skills',
    },
    createdAt: {
        type: Date,
        label: 'createdAt',
        },
    userowner: {
        type: String,
        label: 'userowner',
    },
    state: {
        type: String,
        label: 'state',
    },
    userworker: {
        type: String,
        label: 'userworker'
    },
    datestart: {
        type: Date,
        label: 'datestart',
    },
    datefinished: {
        type: Date,
        label: 'datefinished',
    },
    "notifications.$._id":{
        type: String,
        label:'notifications-id',
    },
    "notifications.$.userowner":{
        type: String,
        label:'notifications-userowner',
    },
    "notifications.$.userpostulate":{
        type: String,
        label:'notifications-userpostulate',
    },
    "notifications.$.projectid":{
        type: String,
        label:'notifications-projectid',
    },
    "notifications.$.date": {
        type: Date,
        label: 'notifications-date',
    },
    "notification.$.statenot": {
        type: String,
        label: 'notifications-state',
    },
});
Projects.attachSchema(Projects.schema);