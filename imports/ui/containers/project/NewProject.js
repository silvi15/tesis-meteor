import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import NewProject from '../../pages/project/NewProject';
import Loading from '../../components/Loading';

const composer = ({ match }, onData) => {
    const user = Meteor.user();
   
    if(user){
        onData(null, { user });
    }
};
export default composeWithTracker(composer, Loading)(NewProject);