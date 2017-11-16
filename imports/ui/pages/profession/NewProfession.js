import React, { PropTypes } from 'react';
import ProfessionEditor from '../../components/profession/ProfessionEditor';

const NewProfession = ({ history }) => (
  <div className="NewProfession">
    <h4 className="page-header">New Profession </h4>
    <ProfessionEditor history={history} />
  </div>
);

NewProfession.propTypes = {
  history: PropTypes.object,
};

export default NewProfession;
