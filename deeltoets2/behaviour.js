$(document).ready(function(){
   
   $('fieldset:nth-of-type(2) label:nth-of-type(1), fieldset:nth-of-type(2) input:nth-of-type(1)').click(function(){
      
      $('fieldset:nth-of-type(3)').css('display', 'none');
      $('fieldset:nth-of-type(4)').css('display', 'block');

   });

   $('fieldset:nth-of-type(2) label:nth-of-type(2), fieldset:nth-of-type(2) input:nth-of-type(2)').click(function(){
      
      $('fieldset:nth-of-type(3)').css('display', 'block');
      $('fieldset:nth-of-type(4)').css('display', 'none');

   });
});