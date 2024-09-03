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


  