import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Projects from '../../../api/projects/projetcs.js';
import ProjectsListFinished from '../../components/project/ProjectsListFinished.js';
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
  
  export default composeWithTracker(composer, Loading)(ProjectsListFinished);
  