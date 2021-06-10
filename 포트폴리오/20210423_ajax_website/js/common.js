$(document).ready(function(){

    $(".nav li").click(function(){
        $("nav li").removeClass("active");
        $(this).addClass("active");
    });

    //처음 화면에 커버붙이기
        $.ajax({
            url : "./coverstory.html",
            success : function(data){
                console.log(data);
                $("#content").html(data);
            }
        });
    
    //coverstory
        $("nav li:eq(0)").click(function(){ //인덱스에서 클릭하면
            $.ajax({
                url : "./coverstory.html",
                success : function(data){
                    $("#content").html(data);
                } 
            });
        //메뉴 클릭시 active 유지 인데 난 왜 또 안됑 -> 클래스를 미리 주고 난 후 한번 더 클릭시 사라짐
            $("nav li").removeClass("active"); 
            $(this).addClass("actvie");
            return false;
        });
        //클릭시 메뉴 active 효과 적용 안됌

    //characters
        $("nav li:eq(1)").click(function(){
            $.ajax({
                url : "./character.html",
                success : function(data){
                    $("#content").html(data);
                }
            })
            $("nav li").removeClass("active");
            $(this).addClass("active");
            return false;
        });
        //클릭시 다른 메뉴 선택 안됨 - common.css- nav에 z-index줌

    //snapshots
        $("nav li:eq(2)").click(function(){ //인덱스에서 클릭하면
            $.ajax({
                url : "./snapshots.html",
                success : function(data){
                    $("#content").html(data);
                } 
            });
            $("nav li").removeClass("active");
            $(this).addClass("active");
            return false;
        });
        //클릭시 메뉴 active 효과 적용 안됌

    //epilogue
        $("nav li:eq(3)").click(function(){
            $.ajax({
                url : "./epilogue.html",
                success : function(data){
                    $("#content").html(data);
                }
            })
            $("nav li").removeClass("active");
            $(this).addClass("active");
            return false;
        });

    //blog
        $("nav li:eq(4)").click(function(){
            $.ajax({
                url : "./blog.html",
                success : function(data){
                    $("#content").html(data);
                }
            });
            $("nav li").removeClass("active");
            $(this).addClass("active");
            return false;
        });

        $(".res_btn").click(function(){
            $("nav").addClass("active");
        });
        
        // $(".nav li").click(function(){
        //     $("nav").removeClass("active");
        // });
        
        $(".btn_close").click(function(){
            $("nav").removeClass("active");
        });


































});