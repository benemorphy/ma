Template._loginButtonsLoggedInDropdown.events({
    'click #login-buttons-edit-profile': function(event) {
        Router.go('meetingroom',Meteor.user()._id);
        console.log (Meteor.user()._id)
    }
});