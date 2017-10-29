import React, { PropTypes } from 'react';
import {Meteor} from 'meteor/meteor';
import ProjectEditor from '../../components/project/ProjectEditor.js';

const NewProject = ({ history, user }) => {
  return (<div className="NewProject">
    <h4 className="page-header">New Project</h4>
    <ProjectEditor user={user} history={history} />
  </div>);
};

NewProject.propTypes = {
  history: PropTypes.object,

};

export default NewProject;
