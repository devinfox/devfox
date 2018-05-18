$(document).ready(function() {
    
    $('#slides').superslides({
        animation: 'fade',
        play: 3000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Full-Stack Web Developer.", "Graphic Designer.", "Creative Director."],
        typeSpeed: 50,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });



});

