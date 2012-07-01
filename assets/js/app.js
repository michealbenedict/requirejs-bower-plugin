define('app', 
  ['require', 
   'jquery', 
   'underscore', 
   'backbone'], function ( require ) {
  
  $("body").prepend("<p>hello world</p>");
  $("body").prepend("<p>Loaded jQuery, underscore and Backbone</p>");
});