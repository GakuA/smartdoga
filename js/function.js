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
        var content = '<!--<div><h4>左端のボタンで削除・追加/右端のつまみで並べ替え</h4></div>-->';
        $.each(arrSelect,
            function(key, value) {
                content += '<div class="' + value + '"><img src="/img/-.png">' + arrGenre[value] + '</div>';
            }
        );

        $(".content .setting").html(content);

        $(".content > div").hide();
        $(".content .setting").show();
    });
});
