ServerDash.Router = Ember.Router.extend({
  location: 'auto'
});

ServerDash.Router.map(function() {
    this.resource('login');
    this.resource('account');
    this.resource('accountSetup');
});
