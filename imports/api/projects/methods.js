import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Projects from './projetcs';
import rateLimit from '../../modules/rate-limit';

export const upsertProject = new ValidatedMethod({
  name: 'projects.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    name: { type: String, optional: true },
    desc: { type: String, optional: true },
    skills: { type: [String] },
    days: { type: String, optional: true },
    money: { type: String, optional: true },
    createdAt: { type: Date },
    userowner: { type: String },
    state: { type: String, optional: true },
    //userworker: { type: String, optional: true },
    //dateStart: { type: Date, optional: true },
    //dateFinish: { type: Date, optional: true },
  }).validator(),
  run(document) {
    return Projects.upsert({ _id: document._id }, { $set: document });
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

rateLimit({
  methods: [
    upsertProject,
    removeProject,
  ],
  limit: 5,
  timeRange: 1000,
});

Meteor.methods({
  upsertProject: (proyectId, userowner, userworker, stateNot, dateStart) => {
    check(proyectId, String);
    check(userowner, String);
    check(userworker, String);
    check(stateNot, String);
    check(dateStart, String);
    check(dateFinish, String);
    Projects.update({ _id: proyectId }, { $push: { notifications: { userowner: userowner, userworker: userworker, stateNot: stateNot, dateStart: dateStart, dateFinish: dateFinish } } }, (error, data) => {
      console.log('error', error);
      console.log('data', data);
    });
  }
});