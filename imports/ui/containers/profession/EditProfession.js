import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Professions from '../../../api/professions/professions';
import EditProfession from '../../pages/profession/EditProfession';
import Loading from '../../components/Loading.js';

const composer = ({ match }, onData) => {
  const professionId = match.params._id;
  const subscription = Meteor.subscribe('professions.view', professionId);
  if (subscription.ready()) {
    const prof = Professions.findOne(professionId);
    onData(null, { prof });
  }
};

export default composeWithTracker(composer, Loading)(EditProfession);
