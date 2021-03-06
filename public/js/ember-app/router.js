ServerDash.Router = Ember.Router.extend({
  location: 'auto'
});

ServerDash.Router.map(function() {
    this.resource('profiles', function() {
        this.resource('activeProfile', { path: '/:profile_id' }, function() {
            this.resource('profileWidgets', { path: '/' }, function() {
                this.resource('widgets', function() {
                    this.route('add');
                });
            });
        });
    });

    this.resource('login');
    this.resource('account');
    this.resource('accountSetup');
});
