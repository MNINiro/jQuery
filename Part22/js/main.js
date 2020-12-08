$(document).ready(function(){

    $("#btn1").click(function(){
      $("div").first().css("background-color","yellow"); // this action will be applied only on the first div
    });
  
    $("#btn2").click(function(){
      $("div").last().css("background-color","yellow"); // this action will be applied only on the first div
    });

    $("#btn3").click(function(){
      $("p").eq(3).css("background-color","yellow"); // this action will be applied only on the first p tag
    });

    $("#btn4").click(function(){
      $("p").filter(".intro").css("background-color","yellow"); // It will filter certain p tag
    });

    $("#btn5").click(function(){
      $("p").not(".intro").css("background-color","yellow"); // It will select all except .intro class of p tag
    });
});



                                

