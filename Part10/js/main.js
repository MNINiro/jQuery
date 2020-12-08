$(document).ready(function(){
 /* $("button").click(function(){
      $("p").hide('slow', function(){ // It's a call back function. It will hide the text first then show the messege
        alert("Hello");
      });
  });  
*/
  $("button").click(function(){
    $("p").hide(1000); // It will show the messege then hide the text 
      alert("Hello");
    });
});  


                                

