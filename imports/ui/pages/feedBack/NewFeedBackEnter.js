import React, { PropTypes } from 'react';
import FeedBackEditorEnter from '../../components/feedback/FeedBackEditorEnter';

const NewFeedBackEnter = ({ history }) => (
  <div className="NewFeedBack">
    <h4 className="page-header">Describe your experince!</h4>
    <FeedBackEditorEnter history={history} />
  </div>
);

NewFeedBackEnter.propTypes = {
  history: PropTypes.object,
};

export default NewFeedBackEnter;
