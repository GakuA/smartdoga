$(function(){
    $("#settingBtn").click(function() {
        var selectGenre = [];
        if ($("#sports").prop('checked')) {
            selectGenre.push("sports");
        }
        if ($("#technology").prop('checked')) {
            selectGenre.push("technology");
        }
        if ($("#news").prop('checked')) {
            selectGenre.push("news");
        }
        if ($("#game").prop('checked')) {
            selectGenre.push("game");
        }
        if ($("#animal").prop('checked')) {
            selectGenre.push("animal");
        }
        if ($("#product").prop('checked')) {
            selectGenre.push("product");
        }
        if ($("#room").prop('checked')) {
            selectGenre.push("room");
        }
        if ($("#tv").prop('checked')) {
            selectGenre.push("tv");
        }
        if ($("#youtuber").prop('checked')) {
            selectGenre.push("youtuber");
        }
        if ($("#great").prop('checked')) {
            selectGenre.push("great");
        }
        if ($("#music").prop('checked')) {
            selectGenre.push("music");
        }
        if ($("#muscle").prop('checked')) {
            selectGenre.push("muscle");
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
        $(".setting h4").hide();

        var arrSelect = $.cookie("genre").split(",");
        $.each(arrSelect,
            function(key, value) {
                $("#" + value).prop('checked', true);
            }
        );

        $(".content .setting").show();
    });
});
