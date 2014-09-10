ServerDash.AccountSetupController = ServerDash.BaseController.extend({
    newEmail: '',
    newPassword: '',
    confirmNewPassword: '',
    errorHeader: 'Unable to update account!',
    errorMessage: 'Please correct the following errors:',
    actions: {
        update: function() {
            var that = this,
                newEmail = that.get('newEmail'),
                newPassword = that.get('newPassword'),
                confirm = that.get('confirmNewPassword'),
                errors = [];

            if(!newEmail) {
                errors.push('Please provide an e-mail address.');
            }

            if(!newPassword) {
                errors.push('Please provide a password.');
            }

            if(newPassword !== confirm) {
                errors.push('Passwords do not match.');
            }

            if(errors.length) {
                that.set('errorList', errors);
                that.set('hasError', true);
            } else {
                that.set('hasError', false);

                Ember.$.ajax({
                    type: 'POST',
                    url: '/auth/doUpdate',
                    data: {
                        newEmail: newEmail,
                        newPassword: newPassword
                    },
                    success: function() {
                        var appController = that.controllerFor('application');
                        appController.notifyPropertyChange('userId'); // force user to rebind now that we're fully authenticated
                        appController.set('firstLogin', false);
                        that.transitionToRoute('index');
                    },
                    error: function(error) {
                        that.handleAjaxError(result);
                    }
                });
            }
        }
    }
});