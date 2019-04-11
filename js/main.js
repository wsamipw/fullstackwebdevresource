$(document).ready(function(){
    //do stuffs here

    //$(selector).action()
    var $clickMeNowBtn = $('#clickMeNow');
    console.log($clickMeNowBtn);

    //.click()
    //.dblclick()
    //.hover()
    //.mouseenter()
    //.mouseleave()
    //.hide()
    //.show()
    //.toggle()
    //.on()
    //.css()
    //.addClass()
    //.removeClass()
    //.toggleClass()

    //document.getElementById('nice').style.color = asdf;

    // $('#clickMeNow').click(function(){
    //     console.log("you clicked me:", $(this));
    //     // $('#table').hide();
    //     $('#table').toggle();

    //     // $('#about-title-text').css("color", "blue");

    //     $('#about-title-text').css({
    //         "color": "blue",
    //         "font-weight": "bold",
    //         "text-decoration": "none"
    //     });
    // });

    $('#clickMeNow').on({
        click : function(){
            console.log("Clicked");

            //do click stuff here
        },
        dblclick:  function(){
            console.log("Dbl Clicked");

            //do double click stuff action here
        },
        mouseenter : function(){
            $(this).css("color", "red");
            console.log("Mouse entered");
            //do mouse enter action here
        },
        mouseleave : function(){
            $(this).css("color", "blue");
            console.log("Mouse leave");

            //do mouse leave action here
        }
    });
});