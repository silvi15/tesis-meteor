import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Countrys from './countrys';
import rateLimit from '../../modules/rate-limit.js';

export const upsertCountry = new ValidatedMethod({
  name: 'countrys.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    name: { type: String, optional: true },
  }).validator(),
  run(document) {
    return Countrys.upsert({ _id: document._id }, { $set: document });
  },
});

export const removeCountry = new ValidatedMethod({
  name: 'countrys.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Countrys.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertCountry,
    removeCountry,
  ],
  limit: 5,
  timeRange: 1000,
});
