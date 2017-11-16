import React, { PropTypes } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeProfession } from '../../../api/professions/methods';
import NotFound from '../NotFound';

const handleEdit = (history, _id) => {
  history.push(`/professions/${_id}/edit`);
};
const handleRemove = (history, _id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeProfession.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Profession deleted!', 'success');
        history.push('/professions');
      }
    });
  }
};

const ViewProfession = ({ prof, history }) => {
  return prof ? (
    <div className="ViewProfession">
      <div className="page-header clearfix">
        <h4 className="pull-left">{ prof && prof.name }</h4>
        <ButtonToolbar className="pull-right">
          <ButtonGroup bsSize="small">
            <Button
              onClick={() => handleEdit(history, prof._id)}
            >Edit</Button>
            <Button
              onClick={() => handleRemove(history, prof._id)}
              className="text-danger"
            >Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    </div>
  ) : <NotFound />;
};

ViewProfession.propTypes = {
  prof: PropTypes.object,
  history: PropTypes.object,
};

export default ViewProfession;
