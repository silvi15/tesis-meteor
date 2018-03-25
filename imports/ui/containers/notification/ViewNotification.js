import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Notifications from '../../../api/notifications/notifications';
import Notification from '../../pages/Notification';
import Loading from '../../components/Loading.js';

const composer = ({ match }, onData) => {
  const notificationId = match.params._id;
  const user = Meteor.user();
  const subscription = Meteor.subscribe('document.view', documentId);
  if (subscription.ready()) {
    const doc = Notification.findOne(notificationId);
    onData(null, { doc, user });
  }
};

export default composeWithTracker(composer, Loading)(Notification);
