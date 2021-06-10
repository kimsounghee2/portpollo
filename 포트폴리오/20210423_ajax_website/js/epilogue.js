$(document).ready(function(){

    var arr_cont = [
        ["ep_top_01.png","당시 무참히 희생된 어린 영혼들에 대한 미안함이 가장 컸다."],
        // ["ep_top_01.png","&quot;당시 무참히 희생된 어린 영혼들에 대한 미안함이 가장 컸다.&quot;"],
        ["ep_top_02.png","학도병들은 군번없는 용사였다. \n싸우는 줄은 알았지만, 단체로 가서 어려운 작전을 수행할 줄은 몰랐다."],
        ["ep_top_03.png","화려한 영웅의 이야기가 아니라 마이너리티의 희생을 다뤄야 해 무엇보다 진정성을 담고자 했다."],
        ["ep_bottom.png",""]
    ];


    // var arr_cont2 =[
    //     ["ep_bottom.png"]
    // ];
    // 하나를 굳이 배열로 만들어야 하나...?
    // 하나니까 그냥 css나 html에 바로 적용하나요?
    // 마지막 이미지니까 굳이 배열로 안해도 되는걸까요?


    var pt_box =`
        <div class="cont">
            <div class="img"></div>
            <div class="txt">
                <p class="review"></p>
            </div>
        </div>
    `;
    // var pt_box2 =`
    //     <div class="l_img"></div>
    // `;

    //for in 문은 패턴과 함께 사용된답니다
    for(i in arr_cont){
        $("#epilogue").append(pt_box);
        // $("#epilogue .cont").append(pt_box2);
    }
    
    $("#epilogue .cont").each(function(index){
        $(this).find(".img").css("background-image","url(./img/"+arr_cont[index][0]+")");
        $(this).find(".txt p").text(arr_cont[index][1]);
        // $(this).find(".txt p").text("&quot;"+arr_cont[index][1]+"&quot;");
    });
});