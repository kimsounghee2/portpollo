$(document).ready(function(){

    //처음거 아니면 ajax 안하나봐
    var arr_cont = [
        ["cha_01.jpg","대위 이명준 역 (김명민)","만약 그들이 전쟁터에 가지 않았더라면, 아마 지금쯤 살아서 멋지게 인생을 살았을 청준들입니다! 제 목숨을 바꿔서라도! 사람들이, 죽은 그 학도병들을 기억하게 할 수 있도록 제가 꼭 만들고 싶습니다!"],
        ["cha_02.jpg","학도병 최성필 역 (최민호)","같이 집에 가야지!"],
        ["cha_04.jpg","중대장 박찬년 역 (곽시양)","기간병은 남고 학도병은 퇴각해!"],
        ["cha_05.jpg","종군기자 매기 역 (매간폭스)","하지만 구할 수 있는 사람을 못 구하면 우리는 뭐가 될까요?"]
    ];

    var pt_box = `
        <div class="cover">
            <div class="img"></div>
            <div class="txt">
                <p class="actor"></p>
                <p class="script"></p>
            </div>
        </div>
        <div class="line"></div>
    `;

    for(i in arr_cont){
        console.log(i); //i는 인덱스번호같은거랍니당
        $("#character").append(pt_box);
    }

    $("#character .cover").each(function(index){
        $(this).find(".img").css("background-image","url(./img/"+arr_cont[index][0]+")");
        $(this).find(".actor").text(arr_cont[index][1]);
        $(this).find(".script").text(arr_cont[index][2]);

    });



});