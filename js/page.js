$(document).ready(function(){
  "use strict";
  /* start the navbar */
  
    $(".nav .container .links ul li").on("click",function(){
    
       $(this).addClass("active").siblings().removeClass("active");
    
    });
    
    /* start */
  $(".nav .container .bar i").on("click",function(){
       $(this).toggleClass("active");
      if($(this).hasClass("active"))
      {
         $(this).next().slideDown(300,function(){
           
           $(this).find("li:eq(0)").fadeIn(200,function(){
           
           $(this).next().fadeIn(200,function(){
           
            $(this).next().fadeIn(200,function(){
            
             $(this).next().fadeIn(200,function(){
             
              $(this).next().fadeIn(200);
             
             })
            
            });
           
           });
           
           });
         
         });	
      }else
      {
      	$(this).next().slideUp(300,function(){
           
           $(this).find("li").fadeOut();
           
           });
      }
      
  });
  /* end */
  /*strat */
  $(".nav .container .bar ul").css({
  
    width:$(window).width(),
    left:0,
  
  });
  
  /* end*/
  /* start*/
    $(window).resize(function(){
		  $(".nav .container .bar ul").css({
		  
		    width:$(window).width(),
		    left:0,
		  
		  });
    });
    /* end*/
    
    /* end the navbar */
    
    /* start the slider */
    
    $(".slider .overlo .d2 form div input").each(function(){
    
     $(".slider .overlo .d2 form div input").on("focus",function(){
     
       	
       	$(this).siblings("span").css({
       	
				left: "-68px",
				top: "-6px",
				color:"white",
       	
       	});
   	   $(this).parent("div").css({
   	   
   	     borderColor:"white",
   	   
   	   });       	
     
     });
      
    });  
    
    $(".slider .overlo .d2 form div input").each(function(){
    
     $(".slider .overlo .d2 form div input").on("blur",function(){
       if($(this).val() !=""){
       	
       	$(this).siblings("span").css({
       	
				left: "-68px",
				top: "-6px",
				
       	});
       	
       }else
       {
        	$(this).siblings("span").css({
       	
       	 left: "15px",
          top: "12px",
          color:"#646161",
       	
       	});
       }
     
     });
     
    });
    
     $(".slider .overlo .d2 form").on("submit",function(e){
        e.preventDefault();
        $(this).find("input").each(function(){
        
        if( $(this).val() ==""){
        	  
        	   $(this).parent("div").css({
        	   
        	     borderColor:"red",
        	   
        	   });
        	 
        }else
        {
        	 
        	   $(this).parent("div").css({
        	   
        	     borderColor:"white",
        	   
        	   });
        	
        }
     });     
     
    });
    /* end the slider */
    /* start the effect */
    
    $(".effect .tabs > div").on("click",function(){
      
       $(this).addClass("active").siblings().removeClass("active");
    
      $(".effect .tabs2").hide();
      $($(this).data("tab")).fadeIn();
    
    });
    
    /* end the effect */


});