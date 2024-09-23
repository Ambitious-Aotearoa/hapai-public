$(document).ready(function () {
    var navHeight = $('nav').outerHeight();
    console.log(navHeight);
  
    // Trigger scroll animation immediately on click
    $('.accordion-item').on('click', function () {
      var buttonTop = $(this).offset().top;
  
      // Scroll the page immediately when the button is clicked
      $('html, body').animate(
        {
          scrollTop: buttonTop - navHeight, // Adjust for nav height
        },
        300 // Duration of the scroll animation
      );
    });
  });
  