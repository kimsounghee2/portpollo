$(document).ready(function () {
  $(".top_btn").click(function(){
    $("html, body").animate({scrollTop:$("#header").offset().top}, 1000);
    //HTML 문서를 감싸는 최상위 공간 <html>태그와 실 브라우저 화면상을 구성하는 최상위 공간 <body>에 애니메이션 기능을 부여하겠다는 선언. 현재 스크롤 바의 위치를 브라우저 상단으로부터 지정한 장소의 상단에 맞춰주겠다는 선언(애니메이션 작동 시간 1000 millie Second = 1초)
    return false;  //<a>가 포함된  공간일 경우 href의 속성이 우선적으로 작동되는데, 이 우선 작동을 멈추게 만들어주는 구문
});
$(".index_btn").click(function(){
  $("html, body").animate({scrollTop:$("#index").offset().top}, 1000);
  return false;
});
$(".about_btn").click(function(){
  $("html, body").animate({scrollTop:$("#about").offset().top}, 1000);
  return false;
});
$(".women_btn").click(function(){
  $("html, body").animate({scrollTop:$("#women").offset().top}, 1000);
  return false;
});
$(".men_btn").click(function(){
  $("html, body").animate({scrollTop:$("#men").offset().top}, 1000);
  return false;
});
$(".services_btn").click(function(){
  $("html, body").animate({scrollTop:$("#services").offset().top}, 1000);
  return false;
});
$(".conteact_btn").click(function(){
  $("html, body").animate({scrollTop:$("#conteact").offset().top}, 1000);
  return false;
});
/*$("#res_menu").click(function(){
  $("#res_menu ul").hide();
    $("#res_menu ul").css("display", "block");
    return false;
});*/
  $(".res_btn").on("click", function(){
    $("#res_menu ul").toggle("fast");
  });
});