// //Media query code
// if ($(window).width() < 768) {
//   $(".search-icon").appendTo($("footer"));
// } else {
//   $(".search-icon").parent;
// }

// Cookie code
$(".cookie").hide().delay(10000).fadeIn();

$(".btn-close").click(function () {
  $(".cookie").hide();
});
$(".accept").click(function () {
  $(".cookie").hide();
});
