var selectGenre = [];

$(function(){
    $("#firstBtn").click(function() {
        if ($("#sports").prop('checked')) {
            selectGenre.push("sports");
            $(".sports").addClass("on");
        }
        if ($("#technology").prop('checked')) {
            selectGenre.push("technology");
            $(".technology").addClass("on");
        }
        if ($("#news").prop('checked')) {
            selectGenre.push("news");
            $(".news").addClass("on");
        }
        if ($("#game").prop('checked')) {
            selectGenre.push("game");
            $(".game").addClass("on");
        }
        if ($("#animal").prop('checked')) {
            selectGenre.push("animal");
            $(".animal").addClass("on");
        }
        if ($("#product").prop('checked')) {
            selectGenre.push("product");
            $(".product").addClass("on");
        }
        if ($("#room").prop('checked')) {
            selectGenre.push("room");
            $(".room").addClass("on");
        }
        if ($("#tv").prop('checked')) {
            selectGenre.push("tv");
            $(".tv").addClass("on");
        }
        if ($("#youtuber").prop('checked')) {
            selectGenre.push("youtuber");
            $(".youtuber").addClass("on");
        }
        if ($("#great").prop('checked')) {
            selectGenre.push("great");
            $(".great").addClass("on");
        }
        if ($("#music").prop('checked')) {
            selectGenre.push("music");
            $(".music").addClass("on");
        }
        if ($("#muscle").prop('checked')) {
            selectGenre.push("muscle");
            $(".muscle").addClass("on");
        }

        $.cookie("genre", selectGenre, 365 * 5);
    });
});
