$(function(){
    $("#firstBtn").click(function() {
        var selectGenre = [];
        if ($("#sports:checked").val()) {
            selectGenre.push("sports");
        }
    });
});
