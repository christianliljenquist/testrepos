$(document).ready(function(){
    $("#hide").click(function(){
        $(".imageone").hide();
    });

    $("#show").click(function(){
        $(".imageone").show();
    });





    $(".screen").hover(function(){
        $(".screen").fadeOut(1000);
  });

  $(".starthover").hover(function(){
      $(".screen").fadeIn(1000);
});

$(".video").hover(function(){
    $("a",).css("background-color", "blue");
    $("a",).css("color", "white");
});

$("#clickhere").click(function(){
    $(".video").show();
});

$("#replacetext").hover(function(){
$("#replace").html("<p>Repeat the process and enjoy!</p>");
});

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });



});



});
