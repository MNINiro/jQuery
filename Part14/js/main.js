$(document).ready(function(){

    $("#btn1").click(function(){
      $("#txt1").append("<b>I am an appended text</b>");  // will append text       
    });

    $("#btn2").click(function(){
      $("#txt1").prepend("<b>I am a prepended text</b>");  // will prepend text       
    });
    /*
    $("#btn3").click(function(){
      $("img").before("<b>I'm a Cute Bay</b>");  // will put text before the text. "After" can be used       
    });
   */
    $("#btn3:last").click(function(){
      $("img").after("<b>I'm a Cute Bay</b>");  // will put text before the text. "After" can be used       
    });
    
  });



                                

