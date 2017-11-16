import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';
import _ from 'lodash';

import Professions from '../../api/professions/professions';

const mails = ['stroncoso@cnmza.org.ar', 'silvi.troncoso@gmail.com'];

const createAccounts = () => {
  _.map(mails, (mail) => {
    if (!Meteor.users.findOne({ 'emails.address': mail })) {
      Accounts.createUser({ email: mail, password: 'silvi123' });
    }
  });
};

const initRoles = () => {
  if (_.includes(Roles.getAllRoles(), 'Admin')) Roles.createRole('Admin');
};

const addMeToAdmin = () => {
  _.map(mails, (mail) => {
    const user = Meteor.users.findOne({ 'emails.address': mail });
  });
};

  const professions = Professions.find().fetch();
  _.map(professions, (prof) => {
    _.map([{name:'Developer', skills : ['java','php']},
           {name:'Desinger', skills : ['Adobe','Ilustrator']},
           {name:'Chef', skills : ['Salad','Food']}]), 
           (typearea, key, string) => {
        const find = TypesAreaStructure.findOne({ name: typearea, professionId: prof._id, skills: string });
        if (!find) {
        TypesAreaStructure.insert({
          name: typearea,
          order: key + 1,
          professionId: prof._id || '',
          skills: string,
        });
      }
    });
    
    _.map(professions, (prof) => {
      const find = Professions.findOne(prof);
      if (!find) Professions.insert(prof);
    });  

const Start = {
  start: () => {
    createAccounts();
    initRoles();
    addMeToAdmin();
    addSomeCollections();
  },
};

export default Start;