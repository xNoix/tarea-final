$(function() {
    $(".main-nav__item-toggle").on("click", function() {
        if ($(".main-nav__item").hasClass("active")) {
            $(".main-nav__item").removeClass("active");
            $(this).find(".main-nav__link").html("<i class='fas fa-bars'></i>");
        } else {
            $(".main-nav__item").addClass("active");
            $(this).find(".main-nav__link").html("<i class='fas fa-times'></i>");
        }
    });
});