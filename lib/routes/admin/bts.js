import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

var bts = FlowRouter.group({
  prefix: '/admin/bts'
});

bts.route('/keys', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            BlazeLayout.render('mainLayout', {content:'btsKeys',menu:'adminMenu'})
        }
    },
    subscriptions: function(params,queryParams) {

    }
})

bts.route('/keys/edit/:id', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            BlazeLayout.render('mainLayout', {content:'btsKeysEdit',menu:'adminMenu'})
        }
    },
    subscriptions: function(params,queryParams) {

    }
})

bts.route('/keys/new', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            BlazeLayout.render('mainLayout', {content:'btsKeysNew',menu:'adminMenu'})
        }
    },
    subscriptions: function(params,queryParams) {

    }
})

bts.route('/rating/:btsNo', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            setTimeout(BlazeLayout.render('mainLayout', {content:'btsRating',menu:'adminMenu'}))

        }
    },
    subscriptions: function(params,queryParams) {
    }
})

bts.route('/allResults/:btsNo', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            setTimeout(BlazeLayout.render('mainLayout', {content:'btsAllResults',menu:'adminMenu'}))

        }
    },
    subscriptions: function(params,queryParams) {
    }
})

bts.route('/top100/:btsNo', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            setTimeout(BlazeLayout.render('mainLayout', {content:'bts100Results',menu:'adminMenu'}))

        }
    },
    subscriptions: function(params,queryParams) {
    }
})

bts.route('/top10/:btsNo', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            setTimeout(BlazeLayout.render('mainLayout', {content:'bts10Results',menu:'adminMenu'}))

        }
    },
    subscriptions: function(params,queryParams) {
    }
})

// objectives
bts.route('/objectives/:btsNo', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            setTimeout(BlazeLayout.render('mainLayout', {content:'btsObjectivesList',menu: 'adminMenu'}))

        }
    },
    subscriptions: function(params,queryParams) {
    }
})

bts.route('/objectives/edit/:_id', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            BlazeLayout.render('mainLayout', {content:'btsObjectivesEdit',menu:'adminMenu'})
        }
    },
    subscriptions: function(params,queryParams) {

    }
})

bts.route('/objectives/addNew/new', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            BlazeLayout.render('mainLayout', {content:'btsObjectivesNew',menu:'adminMenu'})
        }
    },
    subscriptions: function(params,queryParams) {

    }
})

bts.route('/objectives/results/:btsNo/:grade', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            BlazeLayout.render('mainLayout', {content:'btsObjectivesAllResults',menu:'adminMenu'})
        }
    },
    subscriptions: function(params,queryParams) {

    }
})

bts.route('/objectives/rating/:btsNo/:grade', {
    action: function(params,queryParams) {
        if (!Meteor.userId()) {
            FlowRouter.redirect('/signin')
        } else {
            BlazeLayout.render('mainLayout', {content:'btsObjectivesGeneralRating',menu:'adminMenu'})
        }
    },
    subscriptions: function(params,queryParams) {

    }
})

