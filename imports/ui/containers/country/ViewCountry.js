import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Countrys from '../../../api/country/countrys' 
{/* import StatesList from '../../components/country/StatesList'; */}
import Loading from '../../components/Loading.js';
/*
const composer = ({ selectedCountr }, onData) => {
  const subscription = Meteor.subscribe('countrys.view', selectedCountr);
  if (subscription.ready()) {
     const country = Countrys.findOne(selectedCountr); 
     onData(null, { country });
  }
};

export default composeWithTracker(composer, Loading)(StatesList);
*/