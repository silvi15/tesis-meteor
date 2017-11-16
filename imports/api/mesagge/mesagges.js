import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Mesagges = new Mongo.Collection('Mesagges');
export default Mesagges;

Mesagges.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Mesagges.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});
// creacion del schema
Mesagges.schema = new SimpleSchema({
  to: {
    type: String,
  },
  form: {
    type: String,
  },
  body:{
    type: String,
  },
});
Mesagges.attachSchema(Mesagges.schema);
