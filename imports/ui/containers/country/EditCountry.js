import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Countrys from '../../../api/country/countrys';
import EditCountry from '../../pages/country/EditCountry';
import Loading from '../../components/Loading.js';

const composer = ({ match }, onData) => {
  const countryId = match.params._id;
  const subscription = Meteor.subscribe('countrys.view', countryId);
  if (subscription.ready()) {
    const countr = Countrys.findOne(countryId);
    onData(null, { countr });
  }
};

export default composeWithTracker(composer, Loading)(EditCountry);
