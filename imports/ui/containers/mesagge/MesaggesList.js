import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Mesagges from '../../../api/mesagge/mesagges'
import MesaggesList from '../../components/mesagge/MesaggesList';
import Loading from '../../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('mesagges.list');
  if (subscription.ready()) {
    const mesagges = Mesagges.find().fetch();
    const user = Meteor.user();
    onData(null, { mesagges, user });
  }
};

export default composeWithTracker(composer, Loading)(MesaggesList);
