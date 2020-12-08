$(document).ready(function(){

    $("#btn1").click(function(){
      $(".descendent").children().css({    //it will be applied only on descendent's child paragraph
        "color" : "green",
        "border": "2px solid green"  
      })
    });
  
    $("#btn2").click(function(){
      $(".descendent").find("span").css({   //It will find specific child the applly following properties    
        "color" : "blue",
        "border": "2px solid red"  
      })
    });
});



                                

