$(document).ready(function () {
  // When the collapse menu starts to show (animation begins)
  $('.navbar-collapse').on('show.bs.collapse', function () {
    $('.navbar').addClass('nav-change')
  })

  // When the collapse menu starts to hide (animation begins)
  $('.navbar-collapse').on('hide.bs.collapse', function () {
    $('.navbar').removeClass('nav-change')
  })
})

const burger = document.getElementById('burger')
const toggler = document.querySelector('.navbar-toggler')
toggler.addEventListener('click', function () {
  burger.classList.toggle('cross')
})

function getNavHeight() {
  var navHeight = $('nav').outerHeight()
  console.log(navHeight)
  $('.hero').css('padding-top', navHeight)
  // $('.modal:not(#cartSummary)').css('padding-top', navHeight)
}
getNavHeight()
window.addEventListener('resize', getNavHeight)
