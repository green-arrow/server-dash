ServerDash.ApplicationController = Ember.Controller.extend({
    userIdBinding: 'ServerDash.userId',
    firstLoginBinding: 'ServerDash.firstLogin',
    user: function() {
        var val;

        if(this.get('userId')) {
            val = this.store.find('user', this.get('userId'));
        }

        return val;
    }.property('userId'),
    actions: {
        logout: function() {
            var that = this;

            Ember.$.ajax({
                type: 'GET',
                url: '/auth/logout',
                success: function(result) {
                    that.set('userId', undefined);
                    that.transitionToRoute('login');
                },
                error: function(result) {
                    console.error('Something bad happened: ' + result);
                }
            });
        }
    }
});