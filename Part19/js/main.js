$(document).ready(function(){

    $("#btn1").click(function(){
      $("span").parent().css({    //following css properties will be applied only on span's parent li
        "color" : "green",
        "border": "2px solid green"  
      })
    });
  
    $("#btn2").click(function(){
      $("span").parents().css({   //following css properties will be applied on all of span's parents    
        "color" : "blue",
        "border": "2px solid green"  
      })
    });

    $("#btn3").click(function(){
      $("span").parents("ul").css({   //following css properties will be applied on specific span's parents    
        "color" : "red",
        "border": "2px solid red"  
      })
    });

    $("#btn4").click(function(){
      $("span").parentsUntil("div").css({   //following css properties will be applied on specific range span's parents    
        "color" : "blue",
        "border": "2px solid red"  
      })
    });

  });



                                

