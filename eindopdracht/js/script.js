$(document).ready(function(){

    $('header img:nth-of-type(2)').click(function(){
        $('nav').slideToggle(450);
        });

      $("nav").swipe( {
        //Generic swipe handler for all directions
        swipeUp:function(event, direction, distance, duration, fingerCount) {
          $('nav').slideToggle(450);
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:0
      });

    $('fieldset:nth-of-type(2) label:nth-of-type(1), fieldset:nth-of-type(2) input:nth-of-type(1)').click(function(){
      
        $('fieldset:nth-of-type(3)').css('display', 'none');
        $('fieldset:nth-of-type(4)').css('display', 'block');

   });

   $('fieldset:nth-of-type(2) label:nth-of-type(2), fieldset:nth-of-type(2) input:nth-of-type(2)').click(function(){
      
        $('fieldset:nth-of-type(3)').css('display', 'block');
        $('fieldset:nth-of-type(4)').css('display', 'none');

   });

});