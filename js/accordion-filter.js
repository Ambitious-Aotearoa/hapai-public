$(document).ready(function () {
    filterSelection("all");
  
    // Add event listeners to buttons
    $("#btnContainer .btn").click(function () {
      $("#btnContainer .btn").removeClass("active"); // Remove active class from all buttons
      $(this).addClass("active"); // Add active class to the clicked button
  
      var filter = $(this).data("filter");
      filterSelection(filter);
    });
});
  
function filterSelection(c) {
    if (c === "all") c = "";
    
    $(".accordion-item").each(function () {
      $(this).removeClass("show");
      if ($(this).hasClass(c) || c === "") {
        $(this).addClass("show");
      }
    });
}

//scroll to clicked section on mobile

$(document).ready(function () {
    $("#btnContainer .btn").click(function () {
      var filter = $(this).data("filter");
  
      if (filter === "all") {
        $("html, body").animate(
          {
            scrollTop: $(".accordion").offset().top,
          },300 
        );
      } else {
        var target = $(".accordion-item." + filter).first();
        if (target.length) {
          var navHeight = 0; // Adjust this if you have a fixed header
          $("html, body").animate({
              scrollTop: target.offset().top - navHeight,
            },300 
          );
        }
      }
    });
  });
  