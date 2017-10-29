import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';

class MyComponent extends Component {
  componentWillReceiveProps(nextProps) {
    const { user } = nextProps;
    if (user && !Roles.userIsInRole(user._id, ['worker'],'developer')) {
      browserHistory.push('/profile');
    }
    // If Meteor.user() is not ready, this will be skipped.
  }
}

MyComponent.propTypes = {
  user: PropTypes.object,
};

export default createContainer(() => {
  const user = Meteor.user() || null;
  return { user };
}, MyComponent);