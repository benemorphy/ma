Template._loginButtonsLoggedInDropdown.events({
    'click #login-buttons-edit-profile': function(event) {
        Router.go('meetingroom',{_id:Meteor.user()._id});
        console.log (Meteor.user()._id)
    }
});