$(document).ready(function(){

    $('header img:nth-of-type(2)').on('click', function(){
        $('nav').slideToggle(450);
        });

    $('nav').on('swipe', function(){
        $('nav').slideUp(450);
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