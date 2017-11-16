import React from 'react';
import MessageEditor from '../../components/mesagge/MesaggeEditor';
import NotFound from '../NotFound';

const EditMessage = (props) => {
  return props.msg ? (
    <div className="EditMessage">
      <h4 className="page-header">Editing "{ props.msg.to }"</h4>
      <MesaggeEditor {...props} />
    </div>
  ) : <NotFound />;
};

EditMessage.propTypes = {
  msg: React.PropTypes.object,
};

export default EditMessage;
