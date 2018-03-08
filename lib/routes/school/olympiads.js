import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

var olympiads = FlowRouter.group({
    prefix: '/school/olympiads'
});

olympiads.route('/results/region', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            BlazeLayout.render('mainLayout', {content:'olympiadRegionResults',menu:'schoolMenu'})
        }
    }
})

olympiads.route('/results/republic', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            BlazeLayout.render('mainLayout', {content:'olympiadRepublicResults',menu:'schoolMenu'})
        }
    }
})

olympiads.route('/results/inter', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            BlazeLayout.render('mainLayout', {content:'olympiadInterResults',menu:'schoolMenu'})
        }
    }
})

olympiads.route('/rating', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            BlazeLayout.render('mainLayout', {content:'olympiadSchoolRating',menu:'schoolMenu'})
        }
    }
})