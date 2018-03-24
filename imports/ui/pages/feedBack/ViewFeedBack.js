import React, { PropTypes } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeFeedBack } from '../../../api/feedbacks/methods';
import NotFound from '../NotFound';

const handleEdit = (history, _id) => {
  history.push(`/feedback/${_id}/edit`);
};
const handleRemove = (history, _id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeFeedBack.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Document deleted!', 'success');
        history.push('/feedbacks');
      }
    });
  }
};

const ViewFeedBack = ({ doc, history }) => {
  return doc ? (
    <div className="ViewFeedBack">
      <div className="page-header clearfix">
        <h4 className="pull-left">{ doc && doc.comments }</h4>
        <ButtonToolbar className="pull-right">
          <ButtonGroup bsSize="small">
            <Button
              onClick={() => handleEdit(history, doc._id)}
            >Edit</Button>
            <Button
              onClick={() => handleRemove(history, doc._id)}
              className="text-danger"
            >Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      { doc && doc.body }
    </div>
  ) : <NotFound />;
};

ViewFeedBack.propTypes = {
  doc: PropTypes.object,
  history: PropTypes.object,
};

export default ViewFeedBack;
