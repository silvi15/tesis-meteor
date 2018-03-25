import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Skills = new Mongo.Collection('skills');
export default Skills;

Skills.allow({
    insert: () => false,
    update: () => false,
    remove: () => false,
  });
  
Skills.deny({
    insert: () => true,
    update: () => true,
    remove: () => true,
  });
  
Skills.schema = new SimpleSchema({
    name: {
        type: String,
    },
});
Skills.attachSchema(Skills.schema);
