var selectGenre = [];

$(function(){
    $("#firstBtn").click(function() {
        if ($("#sports").prop('checked')) {
            selectGenre.push("sports");
            $("#sports").addClass("on");
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

        $.cookie("genre", selectGenre, 365 * 5);
    });
});
