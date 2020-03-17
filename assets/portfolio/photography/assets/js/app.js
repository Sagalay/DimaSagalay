$(function() {
  var header = $("#header");
  var introHeight = $("#intro").innerHeight();
  var scrollOffset = $(window).scrollTop();

  // Fixed Header
  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introHeight) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  // Menu Nav Toggle
  $("#navToggle").on("click", function(event) {
    event.preventDefault();

    $("#nav").toggleClass("show");
  });
});
