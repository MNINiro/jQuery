$(document).ready(function(){
    /*
    $("button").click(function(){    
        $(".box1").fadeIn('slow');   // display:none must be active
        $(".box2").fadeIn(3000);
        $(".box3").fadeIn(5000);
    }); 
    
    $("button").click(function(){    
        $(".box1").fadeOut('slow');
        $(".box2").fadeOut(2000);
        $(".box3").fadeToggle(3000); // fadeToggle will return box3 after click  
    }); 
    */
    $("button").click(function(){    
        $(".box1").fadeTo('slow', 0.3); //fadeTo to will fade out color according to given opacity i.e. 0.3
        $(".box2").fadeTo('slow', 0.5);
        $(".box3").fadeTo('slow', 0.7);   
    });
});

