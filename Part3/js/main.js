$(document).ready(function(){
    $('button').click(function(){
       /* $('p').hide();            // when button will be clicked (event), <p> tag will be hidden
        $('.lorem').hide();         // same function can be applied on class
        $('#txt').hide();           // same function can be applied on id
        $('*').hide();              // '*' will hide all previous actions along with the button 
        $(this).hide();             // will hide the native object,button. same as $('button').hide(); or $(':button').hide();
        $('p.lorem').hide();        // will hide only lorem class of the p tag 
        $('p#txt').hide();          // will hide only txt id of the p tag 
        $('p:first').hide();        // will hide only the first p tag. p.last for the last p tag 

        $('ul li:first').hide();    // it will hide only the first element (orange) from list-1 
        $('ul li:first-child').hide(); // it will hide first element from all of the lists. last-child for last element 
        $('ul li:nth-child(2)').hide(); // to hide any specific element from the list 

        $('a').hide();                  // will hide any link.  alternate method as follow 
        $('[href]').hide();             */

        $('a[target="_blank"]').hide(); // it will hide the link where there is a target="_blank" command

    });      
});

$(document).ready(function(){
    $('.lorem').click(function(){           /* it will hide the lorem class within p tag */
        $(this).hide();

    });
});

