import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Skills from '../skills';

Meteor.publish('skills.list', () => Skills.find())
Meteor.publish('skill.view',(_id) => {
  check(_id, String)
  return Skills.find(_id)
})