import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Professions from '../../../api/professions/professions' 
import ProfessionsList from '../../components/profession/ProfessionsList';
import Loading from '../../components/Loading.js';

const composer = (params, onData) => {
    const subscription = Meteor.subscribe('professions.list');
    if (subscription.ready()) {
      const professions = Professions.find().fetch();
      onData(null, { professions });
    }
  };
  
  export default composeWithTracker(composer, Loading)(ProfessionsList);
  