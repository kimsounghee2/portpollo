$(document).ready(function () {
  $(".slide ul").slick({
    infinite : true,  //초기 슬라이드 회전 여부(append 및 prepend 방식 써클링이 적용) - 기본값 true
    slidesToShow : 1,  //현재 화면상에서 몇개의 슬라이드 파트를 보열줄 것인가를 결정 - 기본값 1
    slidesToScroll : 1,  //1회 이동시 전환된 이미지의 개수를 결정 - 기본값 1
    autoplay : true,  //자동 슬라이드 여부를 결정 - 기본값 false
    speed : 500,  //슬라이드 전환속도
    autoplaySpeed : 3000,  //자동 슬라이드가 진행되는 동안의 대기시간
    dots : true,
    responsive : [
        {
            breakpoint : 1200,  //반응형 시점(1200px 미만부터 적용해라)
            settings : {
                slidesToShow : 1,
                slidesToScroll : 1
            }

        },
        {
            breakpoint : 768,
            settings : {
                fade : true,
                slidesToShow : 1,
                slidesToScroll : 1,
                autoplay : true,
                dots : false
            }
        },
    ]
});

$('#item .item_cont').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  $(".say_01 ul").slick(
    {dots: true, infinite: true, speed: 300, slidesToShow: 1, adaptiveHeight: true}
);
$(document).ready(function(){
    const movArr = ["cake.mp4"];

    $("#video .res_button").click(function(){
        const $index = $(this).index();
        $(".popup .video_space video").attr({"src":"./video/" + movArr[$index], "autoplay":"autoplay"});
        $(".dark").addClass("active");
        $(".popup").addClass("active");

        return false;
    });


    $(".dark, .close").click(function(){
        $(".dark").removeClass("active");
        $(".popup").removeClass("active");
        $(".popup .video_space video").removeAttr("src");
        $(".popup .video_space video").removeAttr("autoplay");
    });

    $(".video_space div, video").click(function(){
        //클릭이라는 이벤트가 발생했을때 현재상태(hasClass-특정한 상태의 클래스명이 존재한다. 또는 존재하지않는다.)
        let $play = $(".video_space").hasClass("play");
        if($play ==true){
            $(".video_space").removeClass("play");
            $("#playBtn").removeClass("active");
            $("#pausetBtn").addClass("active");

        }else{
            $(".video_space").addClass("play");
            $("#playBtn").addClass("active");
            $("#pausetBtn").removeClass("active");
        }
        timeout();

    });
    function timeout(){
    setTimeout(function(){
        $(".video_space div").removeClass("active");

    },1000);
}

});
$(".res_btn").click(function(){
    $("#res_menu ul").toggleClass("active");
    $("body").toggleClass("scc_none");
});

});