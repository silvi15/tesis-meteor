import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Mesagges from './mesagges';
import rateLimit from '../../modules/rate-limit.js';

export const upsertMesagge = new ValidatedMethod({
  name: 'mesagges.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    to: { type: String, optional: true },
    body: { type: String, optional: true },
  }).validator(),
  run(document) {
    return Mesagges.upsert({ _id: document._id }, { $set: document });
  },
});

export const removeMesagge = new ValidatedMethod({
  name: 'mesagges.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Mesagges.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertMesagge,
    removeMesagge,
  ],
  limit: 5,
  timeRange: 1000,
});
