import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Projects from '../../../api/projects/projetcs.js';
import ProjectsListWorking from '../../components/project/ProjectsListWorking';
import Loading from '../../components/Loading.js'; 


const composer = (params, onData) => {
  const subscription = Meteor.subscribe('projects.list');
  const user = Meteor.user(); 
  if (subscription.ready()) {
    const projects = Projects.find().fetch();
    const user = Meteor.user();
    onData(null, {projects, user});
  }
};

export default composeWithTracker(composer, Loading)(ProjectsListWorking);

/*
const composer = ({ user }, onData) => {
  const userId = user._id;
  const subscription = Meteor.subscribe('user.view', userId)
  if (subscription.ready()) {
    const user = Meteor.users.findOne(userId);
    const userworker = user._id;
    //console.log('user es', userid);
    const pro = Projects.find({ 'userworker': userworker }).fetch();
    console.log('pro es', pro);
    onData(null, { pro })
  }
}

export default composeWithTracker(composer, Loading)(ProjectsListWorking);
 */