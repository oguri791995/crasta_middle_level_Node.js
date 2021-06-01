$(".humberger").on("click",toggle);

function toggle(){
    $(".top-bar,.middle-bar,.bottom-bar").toggleClass("click");
    $(".header-title").toggleClass("header-title-fade"); 
    $(".top-line nav,.header-text,.header-img img").toggleClass("displayNone-sp");
    $("body").toggleClass("noScroll");
}   

