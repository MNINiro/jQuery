$(document).ready(function(){

    $("#btn1").click(function(){
      $("#txt1").text("I am a replaced text");  // will show replaced text       
    });
  
    $("#btn2").click(function(){
      $("#txt2").html("<h2>Hello World</h2>"); // will show text based on assigned html tag        
    });  

    $("#btn3").click(function(){
      $("#name").val("Enter First name"); // will show changed value of the input box        
    });  
    
    $("#btn4").click(function(){
      $("#web").attr("href","https://www.facebook.com/incisltd"); // will replace and redirect changed the web link        
    });  

  });



                                

