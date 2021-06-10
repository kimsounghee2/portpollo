$(document).ready(function(){
/*
//각 메뉴 클릭시, 해당하는 문서를 하나씩 불러오는 방법

    //브라우저가 준비가 완료되면 coverstory.html 문서를 index.html 문서의 section파트에 넣어준다.
    $.ajax({
        url:"./coverstory.html",
        success:function(result){
            $("#content").html(result);
        }
    });

    //coverstory
    $("nav li:eq(0)").click(function(){
        $.ajax({
            url:"./coverstory.html",
            success:function(result){
                $("#content").html(result);
            }
        });
        $("nav li").removeClass("active");
        $(this).addClass("active");
        return false;
    });

    //characters


    //snapshots
    $("nav li:eq(2)").click(function(){
        $.ajax({
            url:"./snapshots.html",
            success:function(result){
                $("#content").html(result);
            }
        });
        $("nav li").removeClass("active");
        $(this).addClass("active");
        return false;
    });

    //epilogue
    $("nav li:eq(3)").click(function(){
        $.ajax({
            url:"./epilogue.html",
            success:function(result){
                $("#content").html(result);
            }
        });
        $("nav li").removeClass("active");
        $(this).addClass("active");
        return false;
    });
*/

/*클릭한 곳의 인덱스번호를 추적하여 해당하는 배열 데이터의 페이지 문서 이름을 통해 화면에 노출시킨다.*/

    var $url = ["coverstory.html", "characters.html", "snapshots.html", "epilogue.html"];
    var $clickIndex;

    $.ajax({
        url:"./"+$url[0],
        success:function(result){
            $("#content").html(result);
        }
    });

    $("nav li").not(":last").click(function(){
        $clickIndex = $(this).index();  //coverstory:0 / characters:1 / snapshots:2 / epilogue:3
        $.ajax({
            url:"./"+$url[$clickIndex],
            success:function(result){
                $("#content").html(result);
            }
        });
        $("nav li").removeClass("active");
        $(this).addClass("active");
        return false;
    });
    
    $(".res_btn").click(function(){
        $("nav").addClass("active");
    });

    $("nav li").click(function(){
        $("nav").removeClass("active");
    });

    $(".close_btn").click(function(){
        $("nav").removeClass("active");
    });



});