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
        optional: true
    },
    desc: {
        type: String,
        optional: true
    },
    days:{
        type: String,
        optional: true
    },
    createdAt: {
        type: Date,
        optional: true
    },
    dateStart: {
        type: Date,
        optional: true
    },
    dateFinish: {
        type: Date,
        optional: true
    },
    money: {
        type: String,
        optional: true
    },
    userowner: {
        type: String,
        optional: true
    },
    state: {
        type: String,
        optional: true
    },
    skills:{
        type: [String],
        optional: true
    },
    stateNot: {
        type: String,
        optional: true,
    },
    userworker: {
        type: String,
        optional: true
    },
    
});
Projects.attachSchema(Projects.schema);