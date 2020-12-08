$(document).ready(function(){
  $("button").click(function(){    
    /*  $("div").animate({
       /*   left: '500px',            // div will move 200px to right
          width: '+=100px',         // size will increase iteratively
          height: '+=100px',
          opacity: '0.5'
        */
        /* 
        height: 'toggle',          // it will increase and decrease diagonaly
        width: 'toggle'
   
        }); */
     /* 
    var x = $("div");               // declared a new variable named x. now apply animation on x
    x.animate({height:'300px',opacity:'0.5'}, "slow"); // height will be increased slowly 
    x.animate({width:'300px',opacity:'0.7'}, "slow"); // width will be increased slowly 
    x.animate({height:'200px',opacity:'0.4'}, "slow"); // height will be increased slowly 
    x.animate({width:'200px',opacity:'1'}, "slow");
    */

   var y = $(".dy");               // declared y new variable named x. now apply animation on y
   y.animate({left: '300px'},'slow');
   y.animate({width:'300px',opacity:'0.7'}, "slow");
   y.animate({fontSize: '40px'},'1000');

    });  
});                                

