$(document).ready(function(){
   
   $('.showStageForm').click(function(){
      
      $('#projectform').css('display', 'none');
      $('#stageform').css('display', 'block');

   });

   $('.showProjectForm').click(function(){
      
      $('#projectform').css('display', 'block');
      $('#stageform').css('display', 'none');

   });
});