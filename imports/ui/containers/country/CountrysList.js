import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Countrys from '../../../api/country/countrys' 
import CountrysList from '../../components/country/CountrysList';
import Loading from '../../components/Loading.js';

const composer = (params, onData) => {
    const subscription = Meteor.subscribe('countrys.list');
    if (subscription.ready()) {
      const countrys = Countrys.find().fetch();
      onData(null, { countrys });
    }
  };
  
  export default composeWithTracker(composer, Loading)(CountrysList);
  