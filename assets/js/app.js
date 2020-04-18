window.onload = function () {
  // Preloader
  let preloader = document.getElementById("preloader");
  preloader.style.display = "none";
};
$(function () {
  // Smooth scroll
  let nav = $("#nav");
  let navToggle = $("#navToggle");

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");
    navToggle.removeClass("active");

    $("html, body").animate(
      {
        scrollTop: elementOffset - 55,
      },
      1000
    );
  });

  // Nav Toggle
  navToggle.on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show");
    navToggle.toggleClass("active");
  });
});
