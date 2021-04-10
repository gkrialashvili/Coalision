$(".nav-item").click(function () { 
   $(this).addClass("active-nav");
   $(".nav-item").not(this).removeClass("active-nav");
    
});