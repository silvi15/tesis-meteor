import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Countrys from '../countrys';

Meteor.publish('countrys.list',() => Countrys.find());
Meteor.publish('countrys.view', (_id) => {
    check(_id, String);
    return Countrys.find(_id);
});