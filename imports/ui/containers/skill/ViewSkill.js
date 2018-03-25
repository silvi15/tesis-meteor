import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Skills from '../../../api/skills/skills';
import ViewSkill from '../../pages/skill/ViewSkill';
import Loading from '../../components/Loading.js';

const composer = ({ match }, onData) => {
  const documentId = match.params._id;
  const user = Meteor.user();
  const subscription = Meteor.subscribe('skill.view', documentId);
  if (subscription.ready()) {
    const doc = Skills.findOne(documentId);
    onData(null, { doc, user });
  }
};

export default composeWithTracker(composer, Loading)(ViewSkill);
