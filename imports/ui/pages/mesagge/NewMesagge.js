import React, { PropTypes } from 'react';
import MesaggeEditor from '../../components/mesagge/MesaggeEditor';

const NewMesagge = ({ history }) => (
  <div className="NewMesagge">
    <h4 className="page-header">New Mesagge</h4>
    <MesaggeEditor history={history} />
  </div>
);

NewMesagge.propTypes = {
  history: PropTypes.object,
};

export default NewMesagge;
