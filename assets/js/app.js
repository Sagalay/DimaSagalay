$(function() {
  // Smooth scroll
  let nav = $("#nav");
  let navToggle = $("#navToggle");

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");

    $("html, body").animate(
      {
        scrollTop: elementOffset - 60
      },
      1000
    );
  });

  // Nav Toggle
  navToggle.on("click", function(event) {
    event.preventDefault();

    nav.toggleClass("show");
  });
});
