$(document).ready(function(){

    $("#btn1").click(function(){
      $("p").css("background-color","red");       // In this way, we can add a CSS property
    });

    $("#btn2").click(function(){
      $("p").css({
        "background-color"  : "black",       // In this way, we can add multiple CSS properties
        "color"             : "#fff",
        "font-size"         : "30px"
      });
    });  
    
  });



                                

