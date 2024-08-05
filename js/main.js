// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


//
// Place any custom JS here
//

// All path elements in the page
const paths = [...document.querySelectorAll('path.path-anim')];
	
 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    // Animate the d attribute (path initial ) to the value in data-path-to;
    // start when the top of its SVG reaches the bottom of the viewport and 
    // end when the bottom of its SVG reaches the top of the viewport 
    paths.forEach(el => {
        const svgEl = el.closest('svg');
        const pathTo = el.dataset.pathTo;

        gsap.timeline({
            scrollTrigger: {
                trigger: svgEl,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                markers:true
            }
        })
        .to(el, {
            ease: 'none',
            attr: { d: pathTo }
        });
    })
   });



// // Create an example popover
// document.querySelectorAll('[data-bs-toggle="popover"]')
//   .forEach(popover => {
//     new bootstrap.Popover(popover)
//   })


