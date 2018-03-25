import React, { PropTypes } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeSkill } from '../../../api/skills/methods';
import NotFound from '../NotFound';

const handleEdit = (history, _id) => {
    history.push(`/skills/${_id}/edit`);
};
const handleRemove = (history, _id) => {
  if(confirm('Are you sure? this is permanent')){
      removeSkill.call({_id},(error) =>{
        if(error){
            Bert.alert(error.reason,'danger'); 
        } else{
            Bert.alert('Skill deleted!','success');
            history.push('/skills');
        }
      });
    }
};
const ViewSkill = ({doc,history}) => {
    return doc ? ( 
    <div className="ViewSkill">
        <div className="page-header clearfix">
        <h4 className="pull-left">{doc && doc.name }</h4>
            <ButtonToolbar className="pull-right">
            <ButtonGroup bsSize="small">
                <Button 
                onClick={() => handleEdit(history, doc._id)}
                >Edit</Button>
                <Button 
                onClick={() => handleEdit(history, doc._id)}
                >Delete</Button>
            </ButtonGroup>
            </ButtonToolbar>
        </div>
        { doc && doc.name }
    </div>
    ) : <NotFound />;
};
ViewSkill.propTypes = {
    doc: PropTypes.object,
    history: PropTypes.object,
};
export default ViewSkill;