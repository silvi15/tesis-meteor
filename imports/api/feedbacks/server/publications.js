import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'
import Feedbacks from '../feedbacks';

Meteor.publish('feedbacks.list',()=> Feedbacks.find());
Meteor.publish('feedbacks.view',(_id) => {
    check(_id, String);
    return Feedbacks.find(_id);
});