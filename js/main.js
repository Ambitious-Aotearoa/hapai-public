// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

  import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// // Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })


  $(document).ready(function() {
    // When the collapse menu is shown
    $('.navbar-collapse').on('shown.bs.collapse', function() {
      $('.navbar').addClass('nav-change');
    });
  
    // When the collapse menu is hidden
    $('.navbar-collapse').on('hidden.bs.collapse', function() {
      $('.navbar').removeClass('nav-change');
    });
  });
  

  
  console.log('test')
  