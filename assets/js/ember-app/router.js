ServerDash.Router = Ember.Router.extend({
  location: 'auto'
});

ServerDash.Router.map(function() {
    this.resource('index', { path: '/' }, function() {
        this.resource('widgets', function() {
            this.route('add');
        });
    });
    this.resource('login');
    this.resource('account');
    this.resource('accountSetup');
});
