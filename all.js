$(document).ready(function () {
    //下拉式選單
    $(".menu-link1").click(function (e) { 
        e.preventDefault();
        $(".drop1").slideToggle();
        $(this).parent().siblings().find(".dropdown-list").slideUp();
        $(".menu-link1").toggleClass("active");
        $(this).parent().siblings().find("a").removeClass("active");
    });
    $(".menu-link2").click(function (e) { 
        e.preventDefault();
        $(".drop2").slideToggle();
        $(this).parent().siblings().find(".dropdown-list").slideUp();
        $(".menu-link2").toggleClass("active");
        $(this).parent().siblings().find("a").removeClass("active");
    });
    //top效果
    $(".back a").click(function (e) { 
        e.preventDefault();
        $("html,body").animate({ scrollTop:0},800);
    });
});