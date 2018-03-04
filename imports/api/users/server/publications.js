import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.publish('user.myUser', () => Meteor.users.find({ _id: Meteor.userId() }));

Meteor.publish('users.list', () => Meteor.users.find());

Meteor.publish('users.listByCorp', () => {
  const user = Meteor.user();

  if(user && user.profile) {
    return Meteor.users.find({ roles: { $ne: "SuperAdminHolos" }, "profile.corporationId": user.profile.corporationId })
  }
});

Meteor.publish('user.view', _id => {
  check(_id, String)
  return Meteor.users.find({ _id })
})