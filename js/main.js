$(document).ready(function(){

 //$(document).on('pagechange', function(){
    
//$('#startTut').click(function(){

    
    $("a.remember").click(function(){
         
        
        $(this).attr("id");
        var current = $(this).attr("id");
       // console.log("hello");
      
      
        $("#startTut").click(function(){
        
       
        var redirect = "#" + current;
        console.log("should go to" + redirect);
             $.mobile.navigate(redirect);
            //window.location. = redirect;
           
        
        
        
        })
        
    
    
    })
    
    
    
    

//});

//localStorage.setItem('homeP','home')


//console.log(data.toPage.attr('id'));


})

































