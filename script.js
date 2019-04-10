 $("button").click(function(){
     var yourName = $(".input1").val();
     var favconsole = $(".input2").val();
     var hrweekly = $(".input3").val();
        $("p").text("Hello " + " I know that " +favconsole +" is fun and all. But by the end of the week " + yourName +" you would have played "  +favconsole +" for " + parseInt(hrweekly) *7 + " hours");
 }); 
    
    