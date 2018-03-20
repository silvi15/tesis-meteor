import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import UserName from '../../components/users/userName';
import Loading from '../../components/Loading.js';

const composer = ({ user }, onData) => {
    console.log('user container', user);
    const userId = user._id;
    const subscription = Meteor.subscribe('user.view', userId)
    if (subscription.ready()) {
        const user = Meteor.users.findOne(userId);
        const name = user.profile.name.first;
        const last = user.profile.name.last;
        onData(null, { name, last });
    }
}
export default composeWithTracker(composer, Loading)(UserName);