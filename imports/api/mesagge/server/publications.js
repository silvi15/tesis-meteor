import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Mesagges from '../mesagges';

Meteor.publish('mesagges.list', () => Mesagges.find());
Meteor.publish('mesagges.view', (_id) => {
  check(_id, String);
  return Mesagges.find(_id);
});
