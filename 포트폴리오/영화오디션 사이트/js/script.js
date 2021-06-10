//배운거 써먹어보고 싶어서 js를 구성해보았습니다,, 방법이 맞는지는 모르겠어요ㅎㅎㅎ 


//#movie
var $movie = ""
var $movie_arr = [
    ["cont_01.png", "죄 많은 소녀 (After My Death, 2019)"],
    ["cont_02.jpeg", "소공녀 (Microhabitat, 2020)"],
    ["cont_03.jpg", "벌새 (House of Hummingbird, 2018)"],
]


for(i=0; i<$movie_arr.length; i++){
    $movie += `
    <article>
        <div class="cont">
            <div class="play"></div>
        </div>
        <p>`+ $movie_arr[i][1] +`</p>
    </article>
`
    document.querySelector(".content").innerHTML = $movie;
    console.log($movie);
}

var $cont = document.querySelectorAll(".content article .cont");
console.log($cont);

for(i=0; i<$movie_arr.length; i++){
    $cont[i].style.backgroundImage = "url(./img/"+ $movie_arr[i][0] + ")";
    console.log(i);
}


//#Actor
var $actor_arr = [
    ["yeobeen.png", "전여빈"],
    ["saebyeok.png", "김새벽"],
    ["sanghee.png", "이상희"],
    ["yeeun.png", "김예은"],
    ["hakju.png", "이학주"],
    ["jungmin.png", "박정민"],
]

var $actor = ""
for(i=0; i<$actor_arr.length; i++){
    $actor += `
    <article>
        <div class="info">
            <p>`+ $actor_arr[i][1] +`</p>
            <div class="btn actor_btn">
                <p>필모그래프</p>
            </div>
        </div>
    </article>
    `
    console.log($actor);

    var $content = document.querySelector("#Actor .wrap .content");
    console.log($content);
    $content.innerHTML = $actor;
}

var $article = document.querySelectorAll("#Actor .wrap .content article");
console.log($article);

for(i=0; i<$actor_arr.length; i++){
    $article[i].style.backgroundImage = "url(./img/"+ $actor_arr[i][0] + ")";
}



