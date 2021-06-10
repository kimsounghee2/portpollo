$(document).ready(function(){
    //2차배열
        var arr_sn = [
            ["cont_01.jpg","Snapshot_01"],
            ["cont_02.jpg","Snapshot_02"],
            ["cont_03.jpg","Snapshot_03"],
            ["cont_04.jpg","Snapshot_04"],
            ["cont_05.jpg","Snapshot_05"],
            ["cont_06.jpg","Snapshot_06"]
        ];
        var pt_sn = `
        <div class="sn_box">
            <div class="dark">
                <h4>snapshot_01</h4>
            </div>
        </div>
        `;
    //이것이 for in 포인문
        for(i in arr_sn){
            console.log(i);
            $(".origin").append(pt_sn);
        }
    //배열을 복사한 패턴에 대응하기
        $(".origin .sn_box").each(function(index){
            $(this).css("background-image","url(./img/"+arr_sn[index][0]+")");
            $(this).find("h4").text(arr_sn[index][1]);
        });
    
    //더보기 버튼
        $(".snapshots button").click(function(){
            //과연 불러오기 어떻게 할듯. 오
            $.ajax({
                url : "./snapshots_add.html",
                success : function(data){
                    $(".add").html(data);
                }
            });
            $(this).hide();
        });





















});