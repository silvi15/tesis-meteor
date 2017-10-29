"use strict";
Tracker.autorun(function(){
    Roles.subscription = Meteor.subscribe("roles");
})