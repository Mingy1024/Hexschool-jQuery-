$(document).ready(function () {

  //lightbox
  lightbox.option({
    resizeDuration: 500,
    wrapAround: true,
    positionFromTop:350,
  });

  // swiper
  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2000,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

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
    $("html,body").animate({ scrollTop: 0 }, 800);
  });
});
