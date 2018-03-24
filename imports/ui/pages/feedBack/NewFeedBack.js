import React, { PropTypes } from 'react';
import FeedBackEditor from '../../components/feedback/FeedBackEditor';

const NewFeedBack = ({ history }) => (
  <div className="NewFeedBack">
    <h4 className="page-header">New Feedback</h4>
    <FeedBackEditor history={history} />
  </div>
);

NewFeedBack.propTypes = {
  history: PropTypes.object,
};

export default NewFeedBack;
