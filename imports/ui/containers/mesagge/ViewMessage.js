import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Mesagges from '../../../api/mesagge/mesagges';
import ViewMesagge from '../../pages/mesagge/ViewMesagge';
import Loading from '../../components/Loading.js';

const composer = ({ match }, onData) => {
  const mesaggeId = match.params._id;
  const subscription = Meteor.subscribe('mesagges.view', mesaggeId);
  if (subscription.ready()) {
    const msg = Mesagges.findOne(mesaggeId);
    onData(null, { msg });
  }
};

export default composeWithTracker(composer, Loading)(ViewMesagge);
