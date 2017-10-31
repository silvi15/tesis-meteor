import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Professions from '../../../api/professions/professions' 
import SkillsList from '../../components/profession/SkillsList';
import Loading from '../../components/Loading.js';

const composer = ({ selectedProf }, onData) => {
  const profid = selectedProf
  const subscription = Meteor.subscribe('professions.view', profid);
  if (subscription.ready()) {
    const prof = Professions.findOne(profid); 
    onData(null, { prof });
  }
};

export default composeWithTracker(composer, Loading)(SkillsList);
