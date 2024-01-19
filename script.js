

$(document).ready(function () {
   $(".form").on("submit", function () {
       $(".loading-icon").removeClass("hide");
       $(".form").css("display", "none");
       $('.banner-text').css("right", "-150px");

   });
   setTimeout(function () {

       $(".loading-icon").addClass("hide");
   }, 5000);
});
$('.select').css('color', 'rgb(218, 212, 212)');
$('.select').change(function () {
   var current = $('.select').val();
   if (current != 'null') {
       $('.select').css('color', '#000');
       $('.select').css('background', '#E8F0FE');
   } else {
       $('.select').css('color', 'rgb(218, 212, 212)');
       $('.select').css('background', '#fff');
   }
}); 


$(document).ready(function () {
    var prevScrollpos = window.scrollY;

    $(window).scroll(function () {
        var currentScrollPos = window.scrollY;

        if (prevScrollpos > currentScrollPos) {
            $(".cta").removeClass("hide-cta");
        } else {
            $(".cta").addClass("hide-cta");
        }

        if (currentScrollPos > 0) {
            $(".cta").addClass("scrolled");
        } else {
            $(".cta").removeClass("scrolled");
        }

        prevScrollpos = currentScrollPos;
    });
});

document.getElementById('btn-submit').addEventListener('click', function() {
    // Show the message container
    document.getElementById('messageContainer').style.display = 'block';
});