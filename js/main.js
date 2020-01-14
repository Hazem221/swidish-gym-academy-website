/*jslint browser: true*/
/*global $*/

$(function() {
  "use strict";

  $(".courses .card").mouseover(function() {
    $(this).addClass("card-box-shadow");
    $(this)
      .find(".details")
      .addClass("details_hover");
    $(this)
      .find(".rate")
      .addClass("rate_hover");
    $(this)
      .find(".round-img")
      .addClass("round-img_hover");
    $(this)
      .find(".card-img-top")
      .addClass("card-img-top_hover");
    $(this)
      .children("span:nth-of-type(2)")
      .addClass("span-comment_hover");
  });

  $(".courses .card").mouseleave(function() {
    $(this).removeClass("card-box-shadow");
    $(this)
      .find(".details")
      .removeClass("details_hover");
    $(this)
      .find(".rate")
      .removeClass("rate_hover");
    $(this)
      .find(".round-img")
      .removeClass("round-img_hover");
    $(this)
      .find(".card-img-top")
      .removeClass("card-img-top_hover");
    $(this)
      .children("span:nth-of-type(2)")
      .removeClass("span-comment_hover");
  });

  $(".acadimic-books .overlay").css({
    position: "absolute",
    content: "",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    "background-color": "rgba(0,0,0,0.5)",
    "z-index": "1"
  });

  $(".acadimic-books .card .card-img-top").mouseover(function() {
    $(this).css({
      "border-bottom": "4px solid #ffcb05"
    });
  });

  $(".acadimic-books .card .card-img-top").mouseleave(function() {
    $(this).css({
      "border-bottom": "4px solid #0171ad"
    });
  });

  $(".articles .container").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    vertical: true
  });

  $(".slider111").slick({
    vertical: true
  });

  /*	$('.client-rev .slider-holder ').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		slidesPerRow : 1
  });*/
});
