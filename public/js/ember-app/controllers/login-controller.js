ServerDash.LoginController = ServerDash.BaseController.extend({
    needs: 'application',
    applicationControllerBinding: 'controllers.application',
    email: '',
    password: '',
    errorHeader: 'Unable to login!',
    errorMessage: 'Please correct the following errors:',
    actions: {
        login: function() {
            var that = this;

            Ember.$.ajax({
                type: 'POST',
                url: '/api/session/login',
                data: {
                    email: this.get('email'),
                    password: this.get('password')
                },
                success: function(result) {
                    that.applicationController.set('userId', result.userId);
                    that.applicationController.set('firstLogin', result.firstLogin);

                    that.set('email', '');
                    that.set('password', '');
                    that.set('hasError', false);

                    if(result.firstLogin) {
                        that.transitionToRoute('accountSetup');
                    }
                    else {
                        that.transitionToRoute('profiles');
                    }
                },
                error: function(result) {
                    that.handleAjaxError(result);
                }
            });
        }
    }
});