$(document).ready(function() {
    var navHeight = 0;
    // Add click event listener to the buttons
    $('#filter button').on('click', function() {
        $('#filter button').removeClass('active');
        $(this).addClass('active')
        var filterValue = $(this).data('filter');
        $('.filter-wrapper-other .filter-item').removeClass('show');
        $('.filter-wrapper-other .filter-item.' + filterValue).addClass('show');
        
    });
});




document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    let mm = gsap.matchMedia()
    var navHeight = $('nav').outerHeight();
    var marker = { startColor: 'green', endColor: 'red', fontSize: '18px', fontWeight: 'bold', indent: 20, zIndex: 2000 }

    function maskingAnimation(){
        let tl = gsap.timeline({
            defaults: {ease: 'none' },
            scrollTrigger: {
              trigger: '.animated-section',
              pin: true,
              anticipatePin: 1,
              scrub: 1,
              start: 'top top+=' + navHeight,
              end: "+=300%",
              invalidateOnRefresh: true,
                toggleActions: 'play none none reverse',
            //   markers: marker,
            },
        })

        tl.addLabel("start");
        tl.to(".animated-section .--blue", {top:0, duration:2}, 'start');
        tl.addLabel("middle");
        tl.to(".animated-section .--yellow", {top:0, duration:2}, 'middle+=2');
        tl.addLabel("end");
        tl.to(".animated-section .--yellow", {position:'fixed'}, 'end+=2');
    }
    

    mm.add('(max-width: 1023px)', () => {
        gsap.set(".animated-section .--blue", {top:'unset'});
        gsap.set(".animated-section .--yellow", {top:'unset', position:'relative'});
        ScrollTrigger.refresh()
    })

    mm.add('(min-width: 1024px)', () => {
        ScrollTrigger.refresh()
        maskingAnimation()
    })


    window.addEventListener('resize', () => {
        ScrollTrigger.refresh(); // Refresh ScrollTrigger to ensure everything is recalculated
    });
 
})

// document.addEventListener("DOMContentLoaded", (event) => {
//     gsap.registerPlugin(ScrollTrigger)
//     let mm = gsap.matchMedia()
//     var navHeight = $('nav').outerHeight();
//     var marker = { startColor: 'green', endColor: 'red', fontSize: '18px', fontWeight: 'bold', indent: 20, zIndex: 2000 }

//     function maskingAnimation(){
//         var firstHeight = $('.mask-item.one h3').outerHeight() + 2;
//         var secondHeight = $('.mask-item.two h3').outerHeight() + 2;
//         var thirdHeight = $('.mask-item.three h3').outerHeight() + 2;
//         var fourthHeight = $('.mask-item.four h3').outerHeight() + 2;

//         let tl = gsap.timeline({
//             defaults: {ease: 'none' },
//             scrollTrigger: {
//               trigger: '.masking-trigger',
//               pin: true,
//               anticipatePin: 1,
//               scrub: 1,
//               start: 'top top+=' + navHeight,
//               end:'+=500%',
//               invalidateOnRefresh: true,
//             // toggleActions: 'play none none reverse',
//             //   markers: marker,
//             },
//         })

//         gsap.set('.mask-wrapper',{ yPercent:10})

//         if ($('.btn-wrapper').length) {
//             gsap.set('.btn-wrapper', { yPercent: 200, opacity:0 });
//         }

//         gsap.set('.mask-item.three  p',{ opacity:0})
//         gsap.set('.mask-item.two  p',{ opacity:0})
//         gsap.set('.mask-item.one',{ ease: "circ.out"})

//         gsap.set('.mask-item.two',{ height:secondHeight, ease: "circ.out"})
//         gsap.set('.mask-item.three',{ height:thirdHeight, ease: "circ.out"})

//         if ($('.mask-item.four').length) {
//             gsap.set('.mask-item.four  p',{ opacity:0})
//             gsap.set('.mask-item.four',{ height:fourthHeight, ease: "circ.out"})
//         }



//         tl.addLabel("start");
//         tl.to('.mask-wrapper',{ yPercent:0, ease: "circ.out", duration:3}, "start")

//         tl.addLabel("second", 100);
//         tl.to('.mask-item.one', 10,{height:firstHeight, ease: "circ.out"},"second")
//         tl.to('.mask-item.one p', 4,{opacity:0, yPercent:-50}, "second-=1")
//         tl.to('.mask-item.two', 4,{height:'auto', ease: "circ.out"},"second")
//         tl.to('.mask-item.two p', 4,{opacity:1}, "second+=0.5")
//         tl.to('.mask-img.one', 2,{ scale:1.2, opacity:0},"second")

     
       
//         tl.addLabel("three", 200);
//         tl.to('.mask-item.two', 10,{height:secondHeight,  ease: "circ.out"},"three")
//         tl.to('.mask-item.two p', 4,{opacity:0, yPercent:-50}, "three-=1")
//         tl.to('.mask-item.three', 4,{height:'auto',  ease: "circ.out"},"three")
//         tl.to('.mask-item.three p', 4, {opacity:1}, "three+=0.5")
//         tl.to('.mask-img.two',2, { scale:1.2, opacity:0},"three")

       
//         if ($('.btn-wrapper').length && !$('.mask-item.four').length) {
//             tl.addLabel("end", 300);
//             tl.to('.btn-wrapper', 1, { yPercent: 0, opacity:1 }, "end");
//         }



//         if ($('.mask-item.four').length) {
//             tl.addLabel("four", 300);

//             tl.to('.mask-item.three', 10,{height:secondHeight,  ease: "circ.out"},"four")
//             tl.to('.mask-item.three p', 4, {opacity:0, yPercent:-50}, "four-=1")
//             tl.to('.mask-item.four', 4,{height:'auto',  ease: "circ.out"},"four")
//             tl.to('.mask-item.four p', 4,{opacity:1}, "four+=0.5")
//             tl.to('.mask-img.three',2, { scale:1.2, opacity:0},"four")


//             tl.addLabel("end", 320);
//             tl.to('.btn-wrapper', 4, { yPercent: 0 }, "end");
//         }
//     }


//     mm.add('(max-width: 1023px)', () => {
//         ScrollTrigger.refresh()
//         gsap.set('.mask-item.one',{ height:'auto', ease: "circ.out"})
//     })

//     mm.add('(min-width: 1024px)', () => {
//         ScrollTrigger.refresh()
//         maskingAnimation()
//     })


//     window.addEventListener('resize', () => {
//         mm.revert(); // Revert any existing matchMedia conditions
//         mm.add('(max-width: 1023px)', () => {
//             gsap.set('.mask-item.one', { height: 'auto', ease: "circ.out" });
//         });

//         mm.add('(min-width: 1024px)', () => {
//             maskingAnimation();
//         });

//         ScrollTrigger.refresh(); // Refresh ScrollTrigger to ensure everything is recalculated
//     });



// })