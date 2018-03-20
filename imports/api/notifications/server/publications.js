import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Notifications from '../notifications';
import _ from 'lodash';

Meteor.publish('notifications.list', () => Notifications.find());

Meteor.publish('notifications.listByUserDestination', () => {
  const user = Meteor.user();
  if(user) return Notifications.find({ usersDestination: user.emails[0].address })
});

Meteor.publish('notifications.topList', limit => {
  check(limit, Number);
  const user = Meteor.user();
  if(user) return Notifications.find({ usersDestination: user.emails[0].address}, { limit: limit });
});

Meteor.publish('notification.view', (_id) => {
  check(_id, String);
  return Notifications.find(_id)
});
