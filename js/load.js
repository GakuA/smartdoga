var arrGenre = {
    sports: "スポーツ",
    technology: "テクノロジー",
    news: "ニュース",
    game: "ゲーム",
    animal: "動物",
    product: "商品紹介",
    room: "部屋紹介",
    tv: "テレビ番組",
    youtuber: "YouTuber",
    great: "凄技",
    music: "音楽",
    muscle: "筋肉"
};

$(function(){
    $('.content > .setting').sortable();
    if ($.cookie("genre")) {
        var arrSelect = $.cookie("genre").split(",");
        var tabText = "<div class='trends active'>トレンド</div>";
        $.each(arrSelect,
            function(key, value) {
                tabText += "<div class='" + value + "'>" + arrGenre[value] + "</div>";
            }
        );
        tabText += "<div class='setting'>設定</div>";
        $(".tab").html(tabText);
        $(".content").css("height", "calc(100vh - 122px)");
        $(".main").show();
    } else {
        $(".first").show();
    }
});
