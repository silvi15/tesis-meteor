import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Mesagges from '../../../api/mesagge/mesagges';
import EditMesagge from '../../pages/mesagge/EditMesagge';
import Loading from '../../components/Loading.js';

const composer = ({ match }, onData) => {
  const messageId = match.params._id;
  const subscription = Meteor.subscribe('mesagges.view', messageId);
  if (subscription.ready()) {
    const msg = Mesagges.findOne(messageId);
    onData(null, { msg });
  }
};

export default composeWithTracker(composer, Loading)(EditMesagge);
