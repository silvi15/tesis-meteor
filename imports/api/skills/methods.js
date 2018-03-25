import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Skills from './skills';
import rateLimit from '../../modules/rate-limit.js';

export const upsertSkill = new ValidatedMethod({
  name: 'skills.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    name: { type: String },
  }).validator(),
  run(doc) {
    console.log('doc', doc);
    return Skills.upsert({ _id: doc._id }, { $set: doc });
  },
});

export const removeSkill = new ValidatedMethod({
  name: 'skills.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Skills.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertSkill,
    removeSkill,
  ],
  limit: 5,
  timeRange: 1000,
});
