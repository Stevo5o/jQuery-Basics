/* @ Stephen O'Connor */
(function ($) {
   // api.jquery.com/category/effects/
   $('h1').addClass('red');
   // button event
   $('button').click(function () {
      //	$('h1').html('Here is some new text');
      $('h1').html('Change Text').slideToggle(200);
      
      // why is dollar not working
      jQuery('ul li').addClass('emphasis');
   });
})(jQuery);