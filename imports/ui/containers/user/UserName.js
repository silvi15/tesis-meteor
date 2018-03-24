import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import UserName from '../../components/users/UserName';
import Loading from '../../components/Loading.js';

const composer = ({ userowner }, onData) => {
    console.log('userowner', userowner);
    const subscription = Meteor.subscribe('user.view', userowner)
    if (subscription.ready()) {
        const doc = Meteor.users.findOne(userowner);
        console.log('docccc', doc);
        onData(null, { doc });
    }
}
export default composeWithTracker(composer, Loading)(UserName);