import React, { PropTypes } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeCountry } from '../../../api/country/methods';
import NotFound from '../NotFound';

const handleEdit = (history, _id) => {
  history.push(`/countrys/${_id}/edit`);
};
const handleRemove = (history, _id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeCountry.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Country deleted!', 'success');
        history.push('/countrys');
      }
    });
  }
};

const ViewCountry = ({ countr, history }) => {
  return countr ? (
    <div className="ViewCountry">
      <div className="page-header clearfix">
        <h4 className="pull-left">{ countr && countr.name }</h4>
        <ButtonToolbar className="pull-right">
          <ButtonGroup bsSize="small">
            <Button
              onClick={() => handleEdit(history, countr._id)}
            >Edit</Button>
            <Button
              onClick={() => handleRemove(history, countr._id)}
              className="text-danger"
            >Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    </div>
  ) : <NotFound />;
};

ViewCountry.propTypes = {
  countr: PropTypes.object,
  history: PropTypes.object,
};

export default ViewCountry;
