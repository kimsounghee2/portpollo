$(document).ready(function () {
    $(".slide ul").slick({
        infinite: true, //초기 슬라이드 회전 여부(append 및 prepend 방식 써클링이 적용) - 기본값 true
        slidesToShow: 1, //현재 화면상에서 몇개의 슬라이드 파트를 보열줄 것인가를 결정 - 기본값 1
        slidesToScroll: 1, //1회 이동시 전환된 이미지의 개수를 결정 - 기본값 1
        autoplay: true, //자동 슬라이드 여부를 결정 - 기본값 false
        speed: 500, //슬라이드 전환속도
        autoplaySpeed: 3000, //자동 슬라이드가 진행되는 동안의 대기시간
        dots: true,
        responsive: [
            {
                breakpoint: 1200, //반응형 시점(1200px 미만부터 적용해라)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }

            }, {
                breakpoint: 768,
                settings: {
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    dots: false
                }
            }
        ]
    });
    $("#photo .wrap").mousemove(function (e) {
        //console.log(e);
        var c_x = e.clientX;
        var c_y = e.clientY;
        console.log(c_x);
        console.log(c_y);
        $(".trace_circle i").css({
            "left": c_x + "px",
            "top": c_y + "px"
        });
    });
    $("#photo .wrap").hover(function () {
        $("#photo .trace_circle i").addClass("active");
    }, function () {
        $("#photo .trace_circle i").removeClass("active");
    });
    $(".say_01 ul").slick(
        {dots: false, infinite: true, speed: 300, slidesToShow: 1, adaptiveHeight: true}
    );

    $(".res_btn").click(function(){
        $("#res_menu ul").toggleClass("active");
        $("body").toggleClass("scc_none");
    });

});
