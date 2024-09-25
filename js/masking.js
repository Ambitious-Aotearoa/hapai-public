$(document).ready(function() {
    var navHeight = 0;
    $('#filter button').on('click', function() {
        var filterValue = $(this).data('filter');

        $('#filter button').removeClass('active');
        $(this).addClass('active');

        
        $('.filter-wrapper-other .filter-item').removeClass('show');
        $('.filter-wrapper-other .filter-item.' + filterValue).addClass('show');


        // var buttonTop = $('.content-filter').offset().top;
        // $("html, body").animate({
        //     scrollTop: buttonTop - navHeight
        // }, 300);
    });
});



document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    let mm = gsap.matchMedia()
    var navHeight = $('nav').outerHeight();
    var marker = { startColor: 'green', endColor: 'red', fontSize: '18px', fontWeight: 'bold', indent: 20, zIndex: 2000 }

    function maskingAnimation(){
        var firstHeight = $('.mask-item.one h3').outerHeight() + 2;
        var secondHeight = $('.mask-item.two h3').outerHeight() + 2;
        var thirdHeight = $('.mask-item.three h3').outerHeight() + 2;

        let tl = gsap.timeline({
            defaults: {ease: 'none' },
            scrollTrigger: {
              trigger: '.masking-trigger',
              pin: true,
              anticipatePin: 1,
              scrub: 1,
              start: 'top top+=' + navHeight,
              end:'bottom top',
              invalidateOnRefresh: true,
            // toggleActions: 'play none none reverse',
              markers: marker,
            },
        })

        gsap.set('.mask-wrapper',{ yPercent:10})
        gsap.set('.btn-wrapper',{ yPercent:200})
        gsap.set('.mask-item.three  p',{ opacity:0})
        gsap.set('.mask-item.two  p',{ opacity:0})
        gsap.set('.mask-item.one',{ ease: "circ.out"})

        gsap.set('.mask-item.two',{ height:secondHeight, ease: "circ.out"})
        gsap.set('.mask-item.three',{ height:thirdHeight, ease: "circ.out"})


        tl.addLabel("start");
        tl.to('.mask-wrapper',{ yPercent:0, ease: "circ.out", duration:3}, "start")

        tl.addLabel("second", 6);
        tl.to('.mask-item.two', 4,{height:'auto', ease: "circ.out"},"second")
        tl.to('.mask-item.one', 6,{height:firstHeight, ease: "circ.out"},"second")
        tl.to('.mask-img.one', { scale:1.2, opacity:0},"second")
        tl.to('.mask-item.one p', 0.5 ,{opacity:0}, "second")
        tl.to('.mask-item.two p', {opacity:1}, "second+=0.5")
       
        tl.addLabel("three", 18);
        tl.to('.mask-item.three', 6,{height:'auto',  ease: "circ.out"},"three")
        tl.to('.mask-item.two', 6,{height:secondHeight,  ease: "circ.out"},"three")
        tl.to('.mask-img.two',{ scale:1.2, opacity:0},"three")
        tl.to('.mask-item.two p', 0.5, {opacity:0}, "three")
        tl.to('.mask-item.three p', {opacity:1}, "three+=0.5")

        tl.addLabel("end", 28);
        tl.to('.btn-wrapper',4,{ yPercent:0},"end")
    }


    mm.add('(max-width: 1023px)', () => {
        ScrollTrigger.refresh()
        gsap.set('.mask-item.one',{ height:'auto', ease: "circ.out"})
    })

    mm.add('(min-width: 1024px)', () => {
        ScrollTrigger.refresh()
        maskingAnimation()
    })


    window.addEventListener('resize', () => {
        mm.revert(); // Revert any existing matchMedia conditions
        mm.add('(max-width: 1023px)', () => {
            gsap.set('.mask-item.one', { height: 'auto', ease: "circ.out" });
        });

        mm.add('(min-width: 1024px)', () => {
            maskingAnimation();
        });

        ScrollTrigger.refresh(); // Refresh ScrollTrigger to ensure everything is recalculated
    });



})

