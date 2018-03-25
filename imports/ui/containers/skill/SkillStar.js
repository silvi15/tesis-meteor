import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Skills from '../../../api/skills/skills'
import SkillStar from '../../components/skill/SkillStar';
import Loading from '../../components/Loading.js';

const composer = (params, onData) => {
    console.log('params', params);
  const subscription = Meteor.subscribe('skills.list');
  const user = Meteor.user();
  if (subscription.ready()) {
    const skills = Skills.find().fetch();
    onData(null, { skills, user });
  }
};

export default composeWithTracker(composer, Loading)(SkillStar);
