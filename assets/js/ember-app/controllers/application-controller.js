ServerDash.ApplicationController = Ember.Controller.extend({
    userIdBinding: 'ServerDash.userId',
    firstLoginBinding: 'ServerDash.firstLogin',
    mobileSidebarVisible: false,
    viewingProfile: false,
    updateCurrentPath: function() {
        this.set('viewingProfile', this.get('currentPath').indexOf('profiles') > -1);
    }.observes('currentPath'),
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
        },
        toggleSidebar: function() {
            var current = this.get('mobileSidebarVisible');
            this.set('mobileSidebarVisible', !current);
        }
    }
});