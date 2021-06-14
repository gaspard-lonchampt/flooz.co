AOS.init({ once: true });

$(window).scroll(function () {
  $("#show").toggleClass(
    "is-fixed-top is-transparent",
    $(this).scrollTop() > 600
  );
});
