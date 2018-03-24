import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Feedbacks from '../../../api/feedbacks/feedbacks'
import FeedBacksList from '../../components/feedback/FeedBacksList';
import Loading from '../../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('feedbacks.list');
  const user = Meteor.user();
  console.log('suscrip crear-> DOCUMENTO',user);
  if (subscription.ready()) {
    const feedbacks = Feedbacks.find().fetch();
    onData(null, { feedbacks, user });
  }
};

export default composeWithTracker(composer, Loading)(FeedBacksList);
