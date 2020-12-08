$(document).ready(function(){
    
    $("#hide").click(function(){    //calling hide id to hide p tag slowly
        $("p").hide('slow');
    });

    $("#show").click(function(){
        $("p").show(2000);      // can be left blank or use fast, medium or in milisecond like (5000)
    });
    
    $("#clickme").click(function(){    //calling Clickme button for toggle action
        $("p").toggle('slow');       // Single button will toggle  the p tag  
    });
});

