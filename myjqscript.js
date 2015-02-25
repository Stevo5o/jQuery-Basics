/* @ Stephen O'Connor */
(function ($) {
    // api.jquery.com/category/effects/
    $('h1').addClass('red');
    // button event
    $('button').click(function () {
       //	$('h1').html('Here is some new text');
       $('h1').html('Change Text').slideToggle(200);
   });      
  
  $('ul li').addClass('emphasis');

      $("document").ready(function() {
            alert("The page just loaded!");
        }); 
})(jQuery);