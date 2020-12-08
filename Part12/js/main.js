$(document).ready(function(){

    $("#btn1").click(function(){
      alert("Text: " + $("#txt").text());  // will show only text       
    });
  
    $("#btn2").click(function(){
      alert("Text: " + $("#txt").html()); // will show text along with html tag        
    });  

    $("#btn3").click(function(){
      alert($("#name").val()); // will show value of the input box        
    });  
    
    $("#btn4").click(function(){
        alert($("#web").attr("href")); // will show attribute of the web link        
      });    
  });



                                

