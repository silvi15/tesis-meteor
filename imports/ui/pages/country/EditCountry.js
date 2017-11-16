import React from 'react';
import CountryEditor from '../../components/country/CountryEditor';
import NotFound from '../NotFound';

const EditCountry = (props) => {
  return props.countr ? (
    <div className="EditCountry">
      <h4 className="page-header">Editing "{ props.countr.name }"</h4>
      <CountryEditor {...props} />
    </div>
  ) : <NotFound />;
};

EditCountry.propTypes = {
  countr: React.PropTypes.object,
};

export default EditCountry;
