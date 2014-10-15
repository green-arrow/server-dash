ServerDash.BaseController = Ember.Controller.extend({
    hasError: false,
    errorHeader: '',
    errorMessage: '',
    errorList: null,
    handleAjaxError: function(response) {
        if(response.status === 400) {
            this.set('errorList', response.responseJSON.errors);
            this.set('hasError', true);
        } else {
            console.error('Error in saving user: ' + response);
        }
    }
});