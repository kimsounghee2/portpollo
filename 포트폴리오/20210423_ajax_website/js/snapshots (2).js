$(document).ready(function(){
    //2차 배열 패턴 = ["이미지", "타이틀"]
    var $sn_arr = [
        ["cont_01.jpg", "Snapshot_01"],
        ["cont_02.jpg", "Snapshot_02"],
        ["cont_03.jpg", "Snapshot_03"],
        ["cont_04.jpg", "Snapshot_04"],
        ["cont_05.jpg", "Snapshot_05"],
        ["cont_06.jpg", "Snapshot_06"],
    ];
    var $snBox = `
    <div class="sn_box">
        <div class="dark">
            <h4>Snapshot_01</h4>
        </div>
    </div>
    `;
    for(i in $sn_arr){
        console.log(i);
        $(".origin").append($snBox);
    }
    $(".origin .sn_box").each(function(index){
        $(this).css("background-image", "url(./img/"+$sn_arr[index][0]+")");
        $(this).find("h4").text($sn_arr[index][1]);
    });

    $(".snapshots button").click(function(){
        $.ajax({
            url:"./snapshots_add.html",
            success:function(result){
                $(".add").html(result);
            }
        });
        $(this).hide();
    });




});