$(".nav-item").click(function () { 
   $(this).addClass("active-nav");
   $(".nav-item").not(this).removeClass("active-nav");
});

    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    
    function validate() {
      const email = $("#email").val();
      let result;
      let empty;
       $("input").each((i) =>{
          let inputs = $("input")[i]
          if ($(inputs).val() == "") {
            empty = false;
         }
         else empty = true;
       });

       if (!empty)
       alert("Please fill all the information");

       if (email !== "") {
          if (validateEmail(email)) {
         console.log("true");
       } else {
         result = ("Please enter valid Email :(");
         $(email).css("border-color", "red");
         alert(result);
       }
       return false;
     }
   }
      
    $(".submitButton").on("click", validate);