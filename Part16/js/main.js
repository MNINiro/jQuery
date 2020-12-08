$(document).ready(function(){

    $("#btn1").click(function(){
      $("p").addClass("txt1");       // In this way, we can add a class in html tags
    });

    $("#btn2").click(function(){
      $("p").addClass("txt1 txt2");       // In this way, we can add multiple classes in tags
    });

    $("#btn3").click(function(){
      $("div").removeClass("txt4");       // In this way, we can remove class(s) from tags
    });                                   // txt4 from div class has been removed
    
    $("#btn4").click(function(){
      $("div").toggleClass("txt4");       // In this way, we can add & remove class(s) from tags
    }); 
  });



                                

