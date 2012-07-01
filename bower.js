define('bower', ['text!browser.json'], function ( opts ) {
  
  var PATH = '/browser_modules/'
    , opts = JSON.parse(opts)
    , app = opts.app
    , dependencies = opts.dependencies
    , config = {
        'paths': {}
      };

  console.log(app);

  for ( prop in dependencies ) {
    if( !dependencies.hasOwnProperty( prop ) ) return;
    if ( app.paths[prop] ) {
      config["paths"][prop] = app.paths[prop];
    } else {
      config["paths"][prop] = PATH + prop + "/" + prop;
    }
  }

  require.config(config)

  require({'baseUrl': app.baseUrl}, app.start)
});