$(window).on("load", function () {
  $("u").each(function () {
    $(this).replaceWith(
      "<span style='text-decoration: underline;'>" + $(this).html() + "</span>"
    );
  });
  $("b").each(function () {
    $(this).replaceWith(
      "<span style='font-weight: bold;'>" + $(this).html() + "</span>"
    );
  });
  $("strong").each(function () {
    $(this).replaceWith(
      "<span style='font-weight: bold;'>" + $(this).html() + "</span>"
    );
  });
  $("em").each(function () {
    $(this).replaceWith(
      "<span style='font-style: italic;'>" + $(this).html() + "</span>"
    );
  });
});
