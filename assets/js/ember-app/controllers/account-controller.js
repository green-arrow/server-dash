ServerDash.AccountController = ServerDash.BaseController.extend({
    newEmail: null,
    password: null,
    newPassword: null,
    confirmNewPassword: null,
    errorHeader: 'Unable to update account!',
    errorMessage: 'Please correct the following errors:',
    successMessage: 'Account updated!',
    showSuccess: false,
    actions: {
        doUpdate: function() {
            var that = this,
                newEmail = that.get('newEmail'),
                password = that.get('password'),
                newPassword = that.get('newPassword'),
                confirm = that.get('confirmNewPassword'),
                errors = [];

            if(!newEmail && !newPassword) {
                errors.push("You haven't made any changes!");
            }

            if(!password) {
                errors.push('You must provide your account password to make changes to your account.')
            }

            if(newPassword !== confirm) {
                errors.push('Passwords do not match.');
            }

            if(errors.length) {
                that.set('errorList', errors);
                that.set('hasError', true);
                that.set('showSuccess', false);
            } else {
                that.set('hasError', false);

                Ember.$.ajax({
                    type: 'POST',
                    url: '/users/validate',
                    data: {
                        password: password
                    },
                    success: function() {
                        var user = that.controllerFor('application').get('user').content;

                        if(newEmail) {
                            user.set('email', newEmail);
                        }

                        if(newPassword) {
                            user.set('password', newPassword);
                        }

                        user.save().then(function() {
                            that.set('hasError', false);
                            that.set('newEmail', '');
                            that.set('password', '');
                            that.set('newPassword', '');
                            that.set('confirmNewPassword', '');
                            that.set('showSuccess', true);
                        }).catch(function(result) {
                            that.set('showSuccess', false);
                            that.handleAjaxError(result);
                        });
                    },
                    error: function(error) {
                        that.set('showSuccess', false);
                        that.handleAjaxError(error);
                    }
                });
            }
        }
    }
});