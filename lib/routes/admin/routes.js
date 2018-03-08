import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

let admin = FlowRouter.group({
  prefix: '/admin'
});

admin.route( '/', {
  action: function() {
      if (! Meteor.userId()) {
          FlowRouter.redirect('/signin')
      } else {
          BlazeLayout.render('mainPage')
      }
  }
});

admin.route('/lessonObjectives', {
  action: function(params,queryParams) {
      if (! Meteor.userId()) {
          FlowRouter.redirect('/signin')
      } else {
          BlazeLayout.render('mainLayout', {content:'lessonObjectives',menu:'adminMenu'})
      }
  },
  subscriptions: function(params,queryParams) {

    }
})

admin.route('/lessonObjectives/edit/:_id', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            BlazeLayout.render('mainLayout', {content:'lessonObjectivesEdit',menu:'adminMenu'})
        }
    },
    subscriptions: function(params,queryParams) {

    }
})

admin.route('/lessonObjectives/new', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            BlazeLayout.render('mainLayout', {content:'lessonObjectivesNew',menu:'adminMenu'})
        }
    },
    subscriptions: function(params,queryParams) {

    }
})

admin.route('/olympiadsRegion', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            BlazeLayout.render('mainLayout', {content:'olympiadAllRegionResults',menu:'adminMenu'})
        }
    },
    subscriptions: function(params,queryParams) {

    }
})

admin.route('/olympiadsRepublic', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            BlazeLayout.render('mainLayout', {content:'olympiadAllRepublicResults',menu:'adminMenu'})
        }
    },
    subscriptions: function(params,queryParams) {

    }
})

admin.route('/olympiadsInter', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            BlazeLayout.render('mainLayout', {content:'olympiadAllInterResults',menu:'adminMenu'})
        }
    },
    subscriptions: function(params,queryParams) {

    }
})

admin.route('/olympiadsRating', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            BlazeLayout.render('mainLayout', {content:'olympiadsRating',menu:'adminMenu'})
        }
    },
    subscriptions: function(params,queryParams) {

    }
})

admin.route('/schoolRating/:schoolId', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            BlazeLayout.render('mainLayout', {content:'schoolRating',menu:'adminMenu'})
        }
    },
    subscriptions: function(params,queryParams) {

    }
})

admin.route('/ubt/rating', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            BlazeLayout.render('mainLayout', {content:'ubtRating',menu:'adminMenu'})
        }
    }
})