import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem, Alert, Button } from 'react-bootstrap';
import ReactStars from 'react-stars'

const handleNav = (history, _id) => {
  history.push(`/skills/${_id}`);
};
const ratingChanged = (newRating) => {
  console.log(newRating)
}

const SkillsList = ({ history, doc }) => (
  doc.length > 0 ? <ListGroup className="SkillsList">
    {doc.map(({ _id, name }) => (
      <Button key={_id} onClick={() => handleNav(history, _id)}>
        {name}
        <ReactStars
          onChange={ratingChanged}
          count={5}
          size={24}
          color2={'#ffd700'} />
      </Button>
    ))}
  </ListGroup> :
    <Alert bsStyle="warning">No Skill yet.</Alert>
);

SkillsList.propTypes = {
  history: PropTypes.object,
  doc: PropTypes.array,
};

export default SkillsList;
