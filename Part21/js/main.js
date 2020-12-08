$(document).ready(function(){

    $("#btn1").click(function(){
      $("h2").siblings().css({    //all of the siblings of h2 will be changed according to these properties except h2
        "color" : "red",
        "border": "2px solid red"  
      })
    });
  
    $("#btn2").click(function(){
      $("h2").siblings("p").css({    //Specific siblings of h2 will be changed 
        "color" : "red",
        "border": "2px solid red"  
      })
    });

    $("#btn3").click(function(){
      $("h2").next().css({    //immidiate next siblings of h2 will be changed 
        "color" : "red",
        "border": "2px solid red"  
      })
    });
    
    $("#btn4").click(function(){
      $("h2").nextAll().css({    //Next all siblings of h2 will be changed
        "color" : "red",
        "border": "2px solid red"  
      })
    });
    
    $("#btn5").click(function(){
      $("h2").nextUntil("a").css({    //Until certain siblings of h2 will be changed 
        "color" : "red",
        "border": "2px solid red"  
      })
    });

    $("#btn6").click(function(){
      $("h2").prev().css({    //Immediate previous siblings of h2 will be changed 
        "color" : "green",
        "border": "2px solid red"  
      })
    });

    $("#btn7").click(function(){
      $("h2").prevAll().css({    //All previous siblings of h2 will be changed 
        "color" : "green",
        "border": "2px solid red"  
      })
    });

    $("#btn8").click(function(){
      $("h2").prevUntil("div").css({    //All previous siblings of h2 will be changed 
        "color" : "green",
        "border": "2px solid red"  
      })
    });
});



                                

