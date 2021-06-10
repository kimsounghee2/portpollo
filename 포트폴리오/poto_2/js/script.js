$(document).ready(function () {
  $(".slide ul").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  $(".res_btn").on("click", function(){
    $("#res_menu ul").toggle("fast");
  });   
});