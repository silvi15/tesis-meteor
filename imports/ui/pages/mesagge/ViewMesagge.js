import React, { PropTypes } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { Link } from 'react-router-dom';  
{/*import { removeMesagge } from '../../../api/message/methods';*/}
import NotFound from '../NotFound';

const handleEdit = (history, _id) => {
  history.push(`/mesagges/${_id}/edit`);
};
const handleRemove = (history, _id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeMesagge.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('mesagge deleted!', 'success');
        history.push('/mesagges');
      }
    });
  }
};

const ViewMesagge = ({ msg, history }) => {
  return msg ? (
    <div className="ViewMesagge">
      <div className="page-header clearfix">
        <h4 className="pull-left">{ msg && msg.from }</h4>
        <ButtonToolbar className="pull-right">
          <ButtonGroup bsSize="small">
            <Button
              onClick={() => handleEdit(history, msg._id)}
            >Response</Button>
            <Button
              onClick={() => handleRemove(history, msg._id)}
              className="text-danger"
            >Delete</Button>
            <Link to="/mesagges/">
                <Button  className="btn btn-default">
                 Back</Button>
              </Link>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      { msg && msg.body }
    </div>
  ) : <NotFound />;
};

ViewMesagge.propTypes = {
  msg: PropTypes.object,
  history: PropTypes.object,
};

export default ViewMesagge;
