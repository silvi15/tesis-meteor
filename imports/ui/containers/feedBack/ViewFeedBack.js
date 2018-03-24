import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Feedbacks from '../../../api/feedbacks/feedbacks';
import ViewFeedBack from '../../pages/feedBack/ViewFeedBack';
import Loading from '../../components/Loading.js';

const composer = ({ match }, onData) => {
  const documentId = match.params._id;
  const user = Meteor.user();
  const subscription = Meteor.subscribe('feedback.view', documentId);
  if (subscription.ready()) {
    const doc = Feedbacks.findOne(documentId);
    onData(null, { doc, user });
  }
};

export default composeWithTracker(composer, Loading)(ViewFeedBack);
