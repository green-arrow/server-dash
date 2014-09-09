var validationMessages = {
    user: {
        email:{
            required:'Email is required',
            email:'Invalid e-mail address.'
        },
        name:{
            required:'name required'
        }

    }
};

/**
 * This function expects the name of the model and error.validationError
 * and puts the user defined messages in error.validationError
 */
module.exports.getErrorMessages = function(model, validationError) {
    var messages = validationMessages[model],
        errors = [];

    for(key in messages){
        var element = messages[key];
        if(validationError[key]){
            for(i in validationError[key]){
                var err = validationError[key][i];
                errors.push(element[err.rule]);
            }
        }
    }

    return errors;
};