import {Mongo} from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Feedbacks = new Mongo.Collection('Feedbacks');
export default Feedbacks;


Feedbacks.allow({
    insert: () => false,
    update: () => false,
    remove: () => false,
  });
  
  Feedbacks.deny({
    insert: () => true,
    update: () => true,
    remove: () => true,
  });
  // creacion del schema
  Feedbacks.schema = new SimpleSchema({
    userworker: {
      type: String,
    },
    userbusines: {
      type: String,
    },
    skills:{
      type: [String],
    },
    comments:{
        type: String,
    },
  });
  Feedbacks.attachSchema(Feedbacks.schema);
  