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
$("#replace").html("<p>Hit the GAS pedal and enjoy the ride!</p>");
});

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });

    $(document).ready(function(){
        $("button").click(function(){
            $("div").animate({left: '1500px'});

        });
    });

    $(document).ready(function(){
        $("#btn1").click(function(){
            $("p").append(" <b>HELLO :) </b>.");
        });


    });
});

});
