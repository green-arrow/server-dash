ServerDash.LoginController = ServerDash.BaseController.extend({
    email: '',
    password: '',
    errorHeader: 'Unable to login!',
    errorMessage: 'Please correct the following errors:',
    actions: {
        login: function() {
            var that = this;

            Ember.$.ajax({
                type: 'POST',
                url: '/auth/doLogin',
                data: {
                    email: this.get('email'),
                    password: this.get('password')
                },
                success: function(result) {
                    that.controllerFor('application').set('userId', result.userId);
                    that.controllerFor('application').set('firstLogin', result.firstLogin);

                    that.set('email', '');
                    that.set('password', '');

                    if(result.firstLogin) {
                        that.transitionToRoute('accountSetup');
                    }
                    else {
                        that.transitionToRoute('index');
                    }
                },
                error: function(result) {
                    that.handleAjaxError(result);
                }
            });
        }
    }
});