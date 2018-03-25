import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Professions from '../../../api/professions/professions' 
import SkillsListStar from '../../components/profession/SkillsListStar';
import Loading from '../../components/Loading.js';

const composer = ({ selectedProf }, onData) => {
  const subscription = Meteor.subscribe('professions.view', selectedProf);
  if (subscription.ready()) {
     const prof = Professions.findOne(selectedProf); 
     onData(null, { prof });
  }
};

export default composeWithTracker(composer, Loading)(SkillsListStar);
