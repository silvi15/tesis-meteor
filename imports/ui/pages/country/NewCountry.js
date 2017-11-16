import React, { PropTypes } from 'react';
import CountryEditor from '../../components/country/CountryEditor';

const NewCountry = ({ history }) => (
  <div className="NewCountry">
    <h4 className="page-header">New Country </h4>
    <CountryEditor history={history} />
  </div>
);

NewCountry.propTypes = {
  history: PropTypes.object,
};

export default NewCountry;
