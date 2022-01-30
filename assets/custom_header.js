$(".nav-icon").click(function() {
    $(".nav-content").addClass("show");
});
$(".nav-close").click(function() {
    $(".nav-content").removeClass("show");
});



$("#cd-close").click(function() {
    $(".cart-drawer").addClass("hide");
    $(".cart-drawer").removeClass("show");
});

$(".cart-icon").click(function() {
    $(".cart-drawer").toggleClass("show");
    $(".cart-drawer").removeClass("hide");

});
$(".product-form__submit").click(function() {
    $(".cart-drawer").addClass("show");
    $(".cart-drawer").removeClass("hide");
});


$('.nav-product-item').hover(function() {
    $(this).find(".nav-product-photo")[0].style.display = "unset";
}, function() {
    $(this).find(".nav-product-photo")[0].style.display = "none";
});
