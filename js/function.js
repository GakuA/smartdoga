$(function(){
    $("#firstBtn").click(function() {
        var selectGenre = [];
        var noSelectGenre = [];
        if ($("#sports").prop('checked')) {
            selectGenre.push("sports");
        } else {
            noSelectGenre.push("sports");
        }
        if ($("#technology").prop('checked')) {
            selectGenre.push("technology");
        } else {
            noSelectGenre.push("technology");
        }
        if ($("#news").prop('checked')) {
            selectGenre.push("news");
        } else {
            noSelectGenre.push("news");
        }
        if ($("#game").prop('checked')) {
            selectGenre.push("game");
        } else {
            noSelectGenre.push("game");
        }
        if ($("#animal").prop('checked')) {
            selectGenre.push("animal");
        } else {
            noSelectGenre.push("animal");
        }
        if ($("#product").prop('checked')) {
            selectGenre.push("product");
        } else {
            noSelectGenre.push("product");
        }
        if ($("#room").prop('checked')) {
            selectGenre.push("room");
        } else {
            noSelectGenre.push("room");
        }
        if ($("#tv").prop('checked')) {
            selectGenre.push("tv");
        } else {
            noSelectGenre.push("tv");
        }
        if ($("#youtuber").prop('checked')) {
            selectGenre.push("youtuber");
        } else {
            noSelectGenre.push("youtuber");
        }
        if ($("#great").prop('checked')) {
            selectGenre.push("great");
        } else {
            noSelectGenre.push("great");
        }
        if ($("#music").prop('checked')) {
            selectGenre.push("music");
        } else {
            noSelectGenre.push("music");
        }
        if ($("#muscle").prop('checked')) {
            selectGenre.push("muscle");
        } else {
            noSelectGenre.push("muscle");
        }

        if (selectGenre.length == 0) {
            alert("興味があるものを選択してください")
            return;
        }
        $.cookie("genre", selectGenre, {expires: 365 * 5});
        location.reload();
    });

    $(".tab div").click(function() {
        $(".tab div").removeClass("active");
        $(".content div").hide();
        $(".content ." + $(this).attr("class")).show();
        $(this).addClass("active");
        $(".tab").css("border-bottom-color", $(this).css("background-color"));
    });

    $(".tab .setting").click(function() {
        var arrSelect = $.cookie("genre").split(",");
        var content = '<div class="tabInSetting"><div class="deleteTab active">削除・並べ替え</div><div class="addTab">追加</div></div><div class="deleteContents">';
        $.each(arrSelect,
            function(key, value) {
                content += '<div class="' + value + '"><img class="minus" src="/img/minus.png">' + arrGenre[value] + '<img class="move" src="/img/move.png"></div>';
            }
        );
        content += "</div>";

        $(".content .setting").html(content);
        $('.content .deleteContents').sortable({ axis: 'y' });

        $(".content > div").hide();
        $(".content .setting").show();
    });

    $(".menuImg").click(function() {
        $(".menu").css("left", "0");
        $(".modal").css({"display": "block", "background-color": "rgba(0, 0, 0, 0.1)"});
    });

    $(".modal").click(function() {
        $(".menu").css("left", "-70%");
        $(".modal").css({"background-color": "rgba(0, 0, 0, 0)", "display": "none"});
    });
});
