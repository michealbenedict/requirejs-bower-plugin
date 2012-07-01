define('bower', ['text!browser.json'], function ( opts ) {
  
  var PATH = '/browser_modules/'
    , opts = JSON.parse(opts)
    , app = opts.app
    , dependencies = opts.dependencies
    , config = {
        'paths': {}
      };

  // A better way to build paths config for all dependencies
  // Example: Backbone depends on Underscore, jQuery
  // what if user has no included underscore in his browser.json
  // Todo: Automatically resolve dependencies of dependencies
  // and add it to the config paths
  for ( prop in dependencies ) {
    if( !dependencies.hasOwnProperty( prop ) ) return;
    if ( app.paths[prop] ) {
      config["paths"][prop] = app.paths[prop];
    } else {
      config["paths"][prop] = PATH + prop + "/" + prop;
    }
  }

  // Need to write a much robust solution with error checking
  require.config(config)
  require({'baseUrl': app.baseUrl}, app.start)
});