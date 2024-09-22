$(document).ready(function () {
  var navHeight = $('nav').outerHeight()
  console.log(navHeight)
  $('.accordion-item').on('click', function () {
    var buttonTop = $(this).offset().top
    $('html, body').animate(
      {
        scrollTop: buttonTop + navHeight + 60,
      },
      300
    )
  })
})
