import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Skills from '../../../api/skills/skills'
import SkillsList from '../../components/skill/SkillsList';
import Loading from '../../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('skills.list');
  const user = Meteor.user();
  if (subscription.ready()) {
    const doc = Skills.find().fetch();
    onData(null, { doc, user });
  }
};

export default composeWithTracker(composer, Loading)(SkillsList);
