import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Countrys = new Mongo.Collection('Countrys');
export default Countrys;

Countrys.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Countrys.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Countrys.schema = new SimpleSchema({
  name: {
    type: String,
    label: 'The name of country.',
  },
});
Countrys.attachSchema(Countrys.schema);
