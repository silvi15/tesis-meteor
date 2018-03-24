import React from 'react';
import FeedBackEditor from '../../components/feedback/FeedBackEditor';
import NotFound from '../NotFound';

const EditFeedBack = (props) => {
  return props.doc ? (
    <div className="EditDocument">
      <h4 className="page-header">Editing "{ props.doc.comments }"</h4>
      <FeedBackEditor {...props} />
    </div>
  ) : <NotFound />;
};

FeedBackEditor.propTypes = {
  doc: React.PropTypes.object,
};

export default FeedBackEditor;
