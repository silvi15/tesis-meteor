import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Projects from './projetcs';
import rateLimit from '../../modules/rate-limit';

export const upsertProject = new ValidatedMethod({
    name:'projects.upsert',
    validate: new SimpleSchema({
        _id:  { type: String, optional: true },
        name: { type: String, optional: true},
        desc: { type: String, optional: true},
        skills: { type: [String]},
        days: { type: String, optional: true},
        money: { type: String, optional: true },
        createdAt: { type: Date},
        userowner: { type: String},
        state:{type: String, optional: true},
        userworker: { type: String, optional: true },
        datestart: { type: Date, optional: true },
        datefinished: { type: Date, optional: true }, 
    }).validator(),
    run(document) {
        return Projects.upsert({_id: document._id},{ $set: document });
    },    
});
export const removeProject = new ValidatedMethod({
    name: 'projects.remove',
    validate: new SimpleSchema({
      _id: { type: String },
    }).validator(),
    run({ _id }) {
      Projects.remove(_id);
    },
  });

export const upsertNotification = new ValidatedMethod({
  name: 'notifications.upsert',
  validate: new SimpleSchema({
    "notifications._id" : {
      type: String,
      optional: true,
    },
    "notifications.userowner" : {
      type: String,
      optional: true, 
    },
    "notifications.userpostulate" : {
      type: String,
      optional: true, 
    },
    "notifications.projectid" : {
      type: String,
      optional: true, 
    },
    "notifications.date": {
      type: Date,
      optional: true,
    },
    "notifications.statenot": {
      type: String,
      optional: true,
    },
  }).validator(),
  run(document) {
    console.log("Document-methods: ", document);
    return Projects.upsert({ _id: document._id },{ $push: { notifications: document } });
      //return Projects.upsert({_id: document._id},{ $set: document });
  }
});

export const removeNotification = new ValidatedMethod({
  name: 'notifications.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Projects.remove(_id);
  },
});
  
rateLimit({
    methods: [
      upsertProject,
      removeProject,
      upsertNotification,
      removeNotification,
    ],
    limit: 5,
    timeRange: 1000,
  });
  
