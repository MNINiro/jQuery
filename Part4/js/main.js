$(document).ready(function(){
    /*
    $('p').dblclick(function(){
       $(this).hide();            // when double clicked (event), <p> tag will be hidden
        
    });  
    
    $("p").mouseenter(function(){
        $(this).hide();            // All p tags will be hidden when mouse will be hover on p tags.
        alert("This p tags will be hidden"); // It will show a message box when mouse is hovered. 
     }); 
     
     $("p").mouseleave(function(){
        alert("This p tags will be hidden"); // It will show a message box when mouse is hovered. 
        $(this).hide();            // All p tags will be hidden when mouse will be hover on p tags.
     }); 
    
     $("p").hover(function(){
        alert("New action");       // It will show a message when mouse is hovered initialy. 
    },
    function(){
        alert("Action over");       // it will show this messege when mouse leave
    });  
    
   
    //======== for input box ==========
    $("input").focus(function(){
        $(this).css("background","#ccc")  
    });
    */

    // for multiple even in one function
    $("p").on({
        mouseenter:function(){
            $(this).css("background-color","red"); 
    },
    
    mouseleave:function(){
        $(this).css("background-color","green"); 
    },
    
    click:function(){
        $(this).css("background-color","yellow"); 
    }
    });

});

