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
        label: 'userworker',
    },
    dateStart: {
        type: Date,
        label: 'dateStart',
    },
    dateFinish: {
        type: Date,
        label: 'datefinish',
    },
    "notifications.$.userPostulate":{
        type: String,
    },
    "notifications.$.userOwner":{
        type: String,
    },
    "notifications.$.date":{
        type: Date,
    },
    "notifications.$.proyectId":{
        type: String,
    },
    "notifications.$.stateNot":{
        type: String,
    },
});
Projects.attachSchema(Projects.schema);