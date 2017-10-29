/* eslint-disable no-undef */
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
import './validation.js';

let component;

const getUserData = () => ({
  email: document.querySelector('[name="emailAddress"]').value,
  password: document.querySelector('[name="password"]').value,
  profile: {
    name: {
      first: document.querySelector('[name="firstName"]').value,
      last: document.querySelector('[name="lastName"]').value,
    },
  },
  roles: component.state.roles,
});
const signupEnterprise = () => {
  const user = getUserData();
  Accounts.createUser(user, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      // browserHistory.push('/');
      Roles.addUsersToRoles(user, roles);
      Bert.alert('Welcome!', 'success');
    }
  });
};

const validate = () => {
  $(component.signupFormEnterprise).validate({
    rules: {
      firstName: {
        required: true,
      },
      lastName: {
        required: true,
      },
      emailAddress: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      firstName: {
        required: 'FirstName',
      },
      lastName: {
        required: 'LastName',
      },
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?',
      },
      password: {
        required: 'Need a password here.',
        minlength: 'Use at least six characters, please.',
      },
    },
    submitHandler() { signupEnterprise(); },
  });
};

export default function handleSignupEnterprise(options) {
  component = options.component;
  console.log('component ', component);
  validate();
}
