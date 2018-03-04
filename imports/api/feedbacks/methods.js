import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Feedbacks from './feedbacks';
import rateLimit from '../../modules/rate-limit.js';

export const upsertFeedback = new ValidatedMethod({
  name: 'feedbacks.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    userworker: { type: String, optional: true },
    userbusines: {type: String, optional: true},
    skills:{ type: [String], optional: true},
    comments:{ type: String, optional: true},
  }).validator(),
  run(doc) {
    return Feedbacks.upsert({ _id: doc._id }, { $set: doc });
  },
});

export const removeFeedback = new ValidatedMethod({
  name: 'feedbacks.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Feedbacks.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertFeedback,
    removeFeedback,
  ],
  limit: 5,
  timeRange: 1000,
});
