Accounts.ui.config({
 // passwordSignupFields: 'USERNAME_ONLY',
 requestPermissions: {},
 passwordSignupFields: 'USERNAME_ONLY',

 extraSignupFields: [
  {
        fieldName: 'terms',
        fieldLabel: 'I accept the terms and conditions',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('You must accept the terms and conditions.');
                return false;
            }
        }
    }]

});