Template._loginButtonsLoggedInDropdown.events({
    'click #login-buttons-edit-profile': function(event) {
        Router.go('meetingroom',{username:Meteor.user().username});
        //console.log (Meteor.user().username)
    }
});