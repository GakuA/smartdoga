var selectGenre = [];

$(function(){
    $("#firstBtn").click(function() {
        if ($("#sports").prop('checked')) {
            selectGenre.push("sports");
            $(".sports").addClass("active");
        }
        if ($("#technology").prop('checked')) {
            selectGenre.push("technology");
            $(".technology").addClass("active");
        }
        if ($("#news").prop('checked')) {
            selectGenre.push("news");
            $(".news").addClass("active");
        }
        if ($("#game").prop('checked')) {
            selectGenre.push("game");
            $(".game").addClass("active");
        }
        if ($("#animal").prop('checked')) {
            selectGenre.push("animal");
            $(".animal").addClass("active");
        }
        if ($("#product").prop('checked')) {
            selectGenre.push("product");
            $(".product").addClass("active");
        }
        if ($("#room").prop('checked')) {
            selectGenre.push("room");
            $(".room").addClass("active");
        }
        if ($("#tv").prop('checked')) {
            selectGenre.push("tv");
            $(".tv").addClass("active");
        }
        if ($("#youtuber").prop('checked')) {
            selectGenre.push("youtuber");
            $(".youtuber").addClass("active");
        }
        if ($("#great").prop('checked')) {
            selectGenre.push("great");
            $(".great").addClass("active");
        }
        if ($("#music").prop('checked')) {
            selectGenre.push("music");
            $(".music").addClass("active");
        }
        if ($("#muscle").prop('checked')) {
            selectGenre.push("muscle");
            $(".muscle").addClass("active");
        }

        $.cookie("genre", selectGenre, 365 * 5);
        $(".first").hide();
        $(".main").show();
    });
});
