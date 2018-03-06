/* basic jQuery */
/* iffe */
(function () {    
   
    // button event
    $('#btn-hide-text').click(function () {   
        $('h1').addClass('red');   
        $('h1').html('Hide me').slideToggle(200);
        $('body').addClass('black');
        $("#btn-hide-text").text(function(i, text){
                return text === "PUSH ME" ? "DON'T PUSH ME" : "PUSH ME";
        });
    });
 
    // change color
    $('#btn-color-text').click(function () { 
        $('ul.color-this>li').addClass('emphasis');        
        $('#content>p').addClass('blue');    
    });     

    $('ul.color-this').children('li').eq(0).text('added with jQuery');
  
  $(".color-this").click(function() {
    $(this).hide();
  });

  console.log("Keep on basic jQuery!");
       
})();
