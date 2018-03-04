import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import rateLimit from '../../modules/rate-limit.js';

export const createUser = history => {
    const colors = ["#e65400", "#2da3d7", "#9f2996", "#018982", "#476475", "#1966b1", "#fab636"];
    user.profile.color = colors[(parseInt(Math.random() * (7 - 0) + 0))];

    Accounts.createUser(user, (error) => {
        if (error) {
            Bert.alert(error.reason, 'danger');
        } else {
            Bert.alert('Welcome!', "success");
            Meteor.call('addToRole', Meteor.userId(), (err) => {
                if (err) {
                    Bert.alert("Se produjo un error: " + err, "success");
                }
            });
            history.push('/');
        }
    });
};

export const updateUser = new ValidatedMethod({
    name: 'user.update',
    validate: new SimpleSchema({
        _id: { type: String, optional: true },
        "profile.name.first": { type: String },
        "profile.name.last": { type: String },
        "profile.color": { type: String },
        "profile.area": { type: String },
        "profile.corporationId": { type: String, optional: true },
        emails: { type: [Object] },
        "emails.$.address": { type: String },
        "emails.$.verified": { type: Boolean, optional: true }
    }).validator(),
    run(user) {
        return Meteor.users.update({ _id: user._id }, { $set: user });
    },
});

rateLimit({
    methods: [
        createUser,
        //removeUser,
        updateUser,
    ],
    limit: 5,
    timeRange: 1000,
});
Meteor.methods({
    RemoveUser: (_id) => {
        check(_id, String);
        const userid = Meteor.users.findOne({ _id: _id });
        Meteor.users.remove({ _id });
    }
});