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
              pinSpacing: false,
            toggleActions: "play pause resume reset",
            //   markers: marker,
            },
        })


        tl.addLabel("start");
        tl.to(".animated-section .--blue", {yPercent:-100, duration:2}, 'start');
        tl.to(".animated-section .--yellow", {yPercent:-100, duration:2}, 'start');
        tl.addLabel("end");
        tl.to(".animated-section .--yellow", {yPercent:-200, duration:2}, 'end');
    }

    mm.add('(max-width: 1023px)', () => {
        ScrollTrigger.refresh()
        var addMargin = $('.animated-section .custom-primary.--yellow')
        addMargin.css('margin-bottom', '0')
    })

    mm.add('(min-width: 1024px)', () => {
        var addMargin = $('.animated-section .custom-primary.--yellow')
        addMargin.css('margin-bottom', 'calc(100vh + 80px + 5vw)')
        maskingAnimation()
    })
 
})


