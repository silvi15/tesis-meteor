import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Professions = new Mongo.Collection('Professions');
export default Professions;

Professions.allow({
    insert: () => false,
    update: () => false,
    remove: () => false,
});
Professions.deny({
    insert: () => true,
    update: () => true,
    remove: () => true,
})
Professions.schema = new SimpleSchema ({
    name: {
        type: String,
    },
    skills:{type: String},
});
Professions.attachSchema(Professions.schema);