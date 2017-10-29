import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Professions from '../professions';

Meteor.publish('professions.list',() => Professions.find());
Meteor.publish('professions.view', (_id) => {
    check(_id, String);
    return Professions.find(_id);
});