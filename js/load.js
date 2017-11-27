$(function(){
    if ($.cookie("genre")) {
        $(".main").show();
    } else {
        $(".first").show();
    }
});
