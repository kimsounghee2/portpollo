// 더보기 버튼 클릭시 이미지 추가
$(document).ready(function(){
    var arr_add = [
        ["cont_07.jpg","Snapshot_07"],
        ["cont_08.jpg","Snapshot_08"],
        ["cont_09.jpg","Snapshot_08"],
        ["cont_10.jpg","Snapshot_10"],
        ["cont_11.jpg","Snapshot_11"],
        ["cont_12.jpg","Snapshot_12"],
        ["cont_13.jpg","Snapshot_13"],
        ["cont_14.jpg","Snapshot_14"],
    ];
    var pt_add = `
    <div class="sn_box">
        <div class="dark">
            <h4>snapshot_01</h4>
        </div>
    </div>
    `;
//이것이 for in 포인문
    for(i in arr_add){
        console.log(i);
        $(".add_box").append(pt_add);
    }
//배열을 복사한 패턴에 대응하기
    $(".add_box .sn_box").each(function(index){
        $(this).css("background-image","url(./img/"+arr_add[index][0]+")");
        $(this).find("h4").text(arr_add[index][1]);
    });


    
});