$(document).ready(function(){
    $("#like").click(function(){
        $(this).css("color", "blue")
        $("#unlike").css("color","")
      $("#pg").load("text.txt #beyen");
    });
  });


$(document).ready(function(){
    $("#unlike").click(function(){
        $(this).css("color", "red")
        $("#like").css("color","")
      $("#pg").load("text.txt #beyenm");
    });
  });



 