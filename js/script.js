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
                    slidesToShow: 1,
                    slidesToScroll: 1
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
            }, {
                breakpoint: 500,
                settings: {
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    dots: false
                }
            }, {
                breakpoint: 300,
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

    $("body").css("overflow-y","hidden");

    setTimeout(function () {
        $("#loading_page").hide();
        $("body").css("overflow-y","auto");
    }, 5000);
    $(document).ready(function(){

        let sec_height = $(window).height();
        console.log(sec_height);
        let sec_height_half = sec_height / 2;
        console.log(sec_height_half);
    
        let target_svgBox_top = $("#circle_bar").offset().top;
        console.log(target_svgBox_top);
        $(window).scroll(function(){
            let $scrollTop = $(window).scrollTop();
            if($scrollTop > target_svgBox_top - sec_height_half){
                $(".box").each(function(){
                    let sel_count = $(this).find(".count").text();
                    $(this).find("circle:eq(1)").css("stroke-dashoffset", "calc(440 - (440 * " + sel_count + ") / 100)");
                });
            }else{
                $(".box").each(function(){
                    $(this).find("circle:eq(1)").css("stroke-dashoffset", "440");
                });
            }
        });
        $(".res_btn").click(function(){
            $("#res_menu ul").toggleClass("active");
            $("body").toggleClass("scc_none");
        });
        });
        
        });
     


