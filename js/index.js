/* Author: Ryan Westphal

*/

$("body").on("pagebeforecreate", "[data-role='page']", function() {
  if ( this.id != "index" ) {
    $("#index .site-nav").clone(true).appendTo($(this).find("[data-role='content']"));
    $("#index .ui-footer").clone(true).appendTo(this);
  }
});
