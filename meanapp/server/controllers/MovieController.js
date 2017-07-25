var Resource = require('resourcejs');

module.exports = function (app, route) {
    //Setup the controller for REST;

    Resource(app, '', route, app.models.movie).rest(); 
    /*********************************************************
     Syntax: Resource(app, route, name, model).rest(); 
     ** The following rest interface would then be exposed. **
     ** /resource - (GET) - List all resources.
     ** /resource - (POST) - Create a new resource.
     ** /resource/:id - (GET) - Get a specific resource.
     ** /resource/:id - (PUT) - Replaces an existing resource.
     ** /resource/:id - (PATCH) - Updates an existing resource.
     ** /resource/:id - (DELETE) - Deletes an existing resource.
     app - express application
     route - this is the route to "mount" this resource onto. e.g this could be '/parent/:parentId
     name - the name of the resource, which will then be used for the URL path of that resource.
     model- The Mongoose Model for this interface
    ************************************************************/

    //return middleware.
    return function(req, res, next){
        next();
    }
}