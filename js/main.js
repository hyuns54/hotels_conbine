$(".package_img2,.package_img3,.package_img4").hide()

$(".package_btn1").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".package_img1").fadeIn().siblings().hide();
});
$(".package_btn2").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".package_img2").fadeIn().siblings().hide();
});
$(".package_btn3").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".package_img3").show().siblings().hide();
});
$(".package_btn4").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".package_img4").show().siblings().hide();
});

$(".depth2").hide()
$(".gnb").mouseenter(function () {
  $(this).find(".depth2").stop().slideDown();
})
$(".gnb").mouseleave(function () {
  $(this).find(".depth2").stop().slideUp();
})

/* $(".date_calender").hide(); */
/* $(".c_add").click(function () {
  $(this).find(".date_calender").stop().show()
}) */

$(".date_add").hide();


$(".c_add").click(function () {
  $(".date_add").fadeIn();
});
$(".p_add").click(function () {
  $(".date_add").fadeIn();
});

$(".apply-button").click(function () {
  $(".date_add").fadeOut();
});

$(".sub_menu").hide();
$(".menu").click(function () {
  $(".sub_menu").fadeIn();
});

$(".sub_close").click(function () {
  $(".sub_menu").fadeOut();
});