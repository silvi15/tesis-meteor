import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Professions from './professions';
import rateLimit from '../../modules/rate-limit';

export const upsertProfession = new ValidatedMethod({
  name: 'professions.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    name: { type: String, optional: true },
  }).validator(),
  run(document) {
    return Professions.upsert({ _id: document._id }, { $set: document });
  },
});

export const removeProfession = new ValidatedMethod({
  name: 'professions.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Professions.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertProfession,
    removeProfession,
  ],
  limit: 5,
  timeRange: 1000,
});
