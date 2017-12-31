import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Projects from '../projetcs';
// select all
Meteor.publish('projects.list', () => Projects.find());

//select project by userworker
Meteor.publish('projects.listByuserworker', (_id) => {
    check(_id, String)
    return Projects.find({ userworker: _id })
})

// select by id
Meteor.publish('projects.view',(_id) => {
    check(_id, String)
    return Projects.find(_id)
})