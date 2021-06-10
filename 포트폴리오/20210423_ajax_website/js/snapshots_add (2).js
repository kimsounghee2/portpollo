$(document).ready(function(){

        //2차 배열 패턴 = ["이미지", "타이틀"]
        var $sn_add_arr = [
            ["cont_07.jpg", "Snapshot_07"],
            ["cont_08.jpg", "Snapshot_08"],
            ["cont_09.jpg", "Snapshot_09"],
            ["cont_10.jpg", "Snapshot_10"],
            ["cont_11.jpg", "Snapshot_11"],
            ["cont_12.jpg", "Snapshot_12"],
            ["cont_13.jpg", "Snapshot_13"],
            ["cont_14.jpg", "Snapshot_14"],
        ];
        var $snAddBox = `
        <div class="sn_box">
            <div class="dark">
                <h4>Snapshot_01</h4>
            </div>
        </div>
        `;
        for(i in $sn_add_arr){
            console.log(i);
            $(".add_box").append($snAddBox);
        }
        $(".add_box .sn_box").each(function(index){
            $(this).css("background-image", "url(./img/"+$sn_add_arr[index][0]+")");
            $(this).find("h4").text($sn_add_arr[index][1]);
        });
});