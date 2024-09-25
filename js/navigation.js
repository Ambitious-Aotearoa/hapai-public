$(document).ready(function () {
    const navbar = $('.navbar');
    const burger = $('#burger'); // jQuery selector for consistency
    const toggler = $('.navbar-toggler');
    const navCollapse = $('#navbarNavDropdown'); // jQuery selector
  
    // Add or remove classes when the collapse menu is toggled
    $('.navbar-collapse').on('show.bs.collapse', () => navbar.addClass('nav-change'));
    $('.navbar-collapse').on('hide.bs.collapse', () => navbar.removeClass('nav-change'));
  
    // Toggle burger icon to a cross
    toggler.on('click', () => burger.toggleClass('cross'));
  
    // Prevent scrolling when the navbar is expanded
    navCollapse.on('show.bs.collapse', () => $('body').addClass('no-scroll'));
    navCollapse.on('hidden.bs.collapse', () => $('body').removeClass('no-scroll'));
  });
  

//   $(document).ready(function () {
//     $('.downwards a').on('click', function (event) {
//       if (this.hash !== '') {
//         event.preventDefault()
//         const target = $(this.hash)
//         $('html, body').animate(
//           {
//             scrollTop: target.offset().top - 80,
//           },
//           800
//         )
//       }
//     })
//   })