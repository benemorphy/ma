Template.gotomeetingroom.events({
'click button#gotomeetingroom': function(event) {
        Router.go('meetingroom',{username:Meteor.user().username});
        //console.log (Meteor.user().username)
    }
})