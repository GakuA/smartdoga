$(function(){
    if (!$.cookie("genre")) {
        $(".main").hide();
        $(".first").show();
    }
});
