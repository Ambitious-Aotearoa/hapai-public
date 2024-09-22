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
}
getNavHeight()
window.addEventListener('resize', getNavHeight)


      // Select the collapse element
      const navCollapse = document.getElementById('navbarNavDropdown')

      // When the collapse is shown, add the no-scroll class to body and prevent touch scrolling outside navCollapse
      navCollapse.addEventListener('show.bs.collapse', function () {
        document.body.classList.add('no-scroll')
      })

      // When the collapse is hidden, remove the no-scroll class and re-enable body touch scrolling
      navCollapse.addEventListener('hidden.bs.collapse', function () {
        document.body.classList.remove('no-scroll')
      })