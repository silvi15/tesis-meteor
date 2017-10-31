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
    birthday:{ 
      day: document.querySelector('[name="birthday"]').value 
    },
    profession:{
       name: document.querySelector('[name="profession"]').value,
    },
    profiled:{
      name: document.querySelector('[name="profiled"]').value,
    },
    skills:{
      name : component.state.selectedSkill,
    },  
  },
});

const signup = () => {
  const user = getUserData();
  console.log('role:',user.roles);
  Accounts.createUser(user, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      Roles.addUsersToRoles(Meteor.users.findOne(Meteor.userId()),['worker']);
      Bert.alert('Welcome!', 'success');
    }
  });
};

const validate = () => {
  $(component.signupForm).validate({
    rules: {
      firstName: {
        required: true,
      },
      lastName: {
        required: true,
      },
      birthday: {
        required: true,
      },
      profession: {
        required: true,
      },
      profiled: {
        required: true,
      },
      skills: {
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
        required: 'First name?',
      },
      lastName: {
        required: 'Last name?',
      },
      birthday : {
        required: ' Birthday ?'
      },
      profession: {
        required: 'Profession?',
      },
      profiled: {
        required: 'Profile?',
      },
      skills: {
        required: 'Please select one skills',
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
    submitHandler() { signup(); },
  });
};

export default function handleSignup(options) {
  component = options.component;
  console.log('component ', component);
  validate();
}
