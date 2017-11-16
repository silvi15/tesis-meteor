import React from 'react';
import ProfessionEditor from '../../components/profession/ProfessionEditor';
import NotFound from '../NotFound';

const EditProfession = (props) => {
  return props.prof ? (
    <div className="EditProfession">
      <h4 className="page-header">Editing "{ props.prof.name }"</h4>
      <ProfessionEditor {...props} />
    </div>
  ) : <NotFound />;
};

EditProfession.propTypes = {
  prof: React.PropTypes.object,
};

export default EditProfession;
