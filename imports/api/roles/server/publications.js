import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.publish('secrets', function (group) {
    if (Roles.userIsInRole(this.userId, ['view-secrets','admin'], group)) {
      return Meteor.secrets.find({group: group});
    } else {
      // user not authorized. do not publish secrets
      this.stop();
      return;
    }
  });
// para enterprise
Meteor.publish('enterprise', function (group) {
    if (Roles.userIsInRole(this.userId, ['view-enterprise','enterprise'], group)) {
      return Meteor.enterprise.find({group: group});
    } else {
      // user not authorized. do not publish enterprise
      this.stop();
      return;
    }
  });
  Meteor.publish('worker', function (group) {
    if (Roles.userIsInRole(this.userId, ['view-worker','worker'], group)) {
      return Meteor.worker.find({group: group});
    } else {
      // user not authorized. do not publish worker
      this.stop();
      return;
    }
  });