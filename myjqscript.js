/* @ Stephen O'Connor */
  (function($) {     
     
     $('h1').addClass('red');
     // button event
     $('button').click(function() {
     //	$('h1').html('Here is some new text');
     	$('h1').slideToggle(200);
     });
     
  })(jQuery);