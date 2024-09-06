
$(document).ready(function () {
    // Check if any #btnContainer exists on the page
    if ($('[id^="btnContainer"]').length) {
        // Initialize filters for each container
        $('[id^="btnContainer"]').each(function () {
            var containerId = $(this).attr('id');
            console.log('Initializing filter for container:', containerId);
            filterSelection(containerId, "all");
          
            // Add event listeners to buttons within each container
            $('#' + containerId + ' .btn').click(function () {
                console.log('Button clicked in container:', containerId);
                $('#' + containerId + ' .btn').removeClass('active'); // Remove active class from all buttons in the container
                $(this).addClass('active'); // Add active class to the clicked button
            
                var filter = $(this).data('filter');
                console.log('Filtering with criteria:', filter);
                filterSelection(containerId, filter);

                // Call the scroll function based on the filter
                scrollToFilter(containerId, filter);
            });
        });
    }
    // Check if .same-height-wrapper is present
    if ($(".same-height-wrapper").length) {
        updateElementHeights();

        // Run on window resize
        window.addEventListener('resize', updateElementHeights);
    }
});

function filterSelection(containerId, filter) {
    if (filter === "all") filter = "";
  
    console.log('Filtering items in container:', containerId);
    $('#' + containerId).next('.filter-wrapper').find('.filter-item').each(function () {
        console.log('Checking item:', $(this).attr('class'));
        $(this).removeClass('show');
        if ($(this).hasClass(filter) || filter === "") {
            $(this).addClass('show');
        }
    });
}

function scrollToFilter(containerId, filter) {
    var navHeight = 0 // Adjust this if you have a fixed header

    if (filter === "all") {
        // Scroll to the top of the filter wrapper, adjusted for the fixed header
        $("html, body").animate({
            scrollTop: $('#' + containerId).next('.filter-wrapper').offset().top - navHeight
        }, 300);
    } else {
        var target = $('#' + containerId).next('.filter-wrapper').find('.filter-item.' + filter).first();
        if (target.length) {
            // Scroll to the target item, adjusted for the fixed header
            $("html, body").animate({
                scrollTop: target.offset().top - navHeight
            }, 300);
        }
    }
}



// function updateElementHeights() {
//     const desktopWidth = 1024;

//     // Select all .same-height-wrapper containers
//     const wrappers = document.querySelectorAll('.same-height-wrapper');

//     wrappers.forEach((wrapper) => {
//         const selectors = ['.same-height h3', '.same-height h2', '.same-height p:not(.btn-icon p, .no-height, p.other-height)', 'p.other-height']; // List of child elements to target within each wrapper

//         selectors.forEach((selector) => {
//             const elements = wrapper.querySelectorAll(selector);

//             // Reset heights to auto to recalculate
//             elements.forEach((el) => {
//                 el.style.height = 'auto'; // Reset height to auto
//             });

//             // Apply same height in groups of three
//             for (let i = 0; i < elements.length; i += 3) {
//                 let maxHeight = 0;

//                 // Calculate the tallest height in the current group of three
//                 for (let j = i; j < i + 3 && j < elements.length; j++) {
//                     const elementHeight = elements[j].offsetHeight;
//                     if (elementHeight > maxHeight) {
//                         maxHeight = elementHeight;
//                     }
//                 }

//                 // Apply the tallest height to the current group of three
//                 for (let j = i; j < i + 3 && j < elements.length; j++) {
//                     elements[j].style.height = `${maxHeight}px`;
//                 }
//             }
//         });
//     });

//     // Reset styles for mobile
//     if (window.innerWidth < desktopWidth) {
//         wrappers.forEach((wrapper) => {
//             const elements = wrapper.querySelectorAll('.same-height h3, .same-height h2, .same-height p:not(.btn-icon p, .no-height), p.other-height');
//             elements.forEach((el) => {
//                 el.style.height = ''; // Reset height to auto
//             });
//         });


//     }
// }


function updateElementHeights() {
    const desktopWidth = 1024;
    const tabletWidth = 768;

    // Select all .same-height-wrapper containers
    const wrappers = document.querySelectorAll('.same-height-wrapper');
    const wrappersTablet = document.querySelectorAll('.same-height-wrapper.tablet-style');

    // Reset heights for all wrappers
    const resetHeights = (elements) => {
        elements.forEach((el) => {
            el.style.height = 'auto'; // Reset height to auto
        });
    };

    // Apply same height in groups of three (desktop)
    const applySameHeightGroups = (elements, groupSize) => {
        for (let i = 0; i < elements.length; i += groupSize) {
            let maxHeight = 0;

            // Calculate the tallest height in the current group
            for (let j = i; j < i + groupSize && j < elements.length; j++) {
                const elementHeight = elements[j].offsetHeight;
                if (elementHeight > maxHeight) {
                    maxHeight = elementHeight;
                }
            }

            // Apply the tallest height to the current group
            for (let j = i; j < i + groupSize && j < elements.length; j++) {
                elements[j].style.height = `${maxHeight}px`;
            }
        }
    };

    // Process desktop and tablet styles
    const processWrappers = (wrappers, groupSize) => {
        wrappers.forEach((wrapper) => {
            const selectors = ['.same-height h3', '.same-height h2', '.same-height p:not(.btn-icon p, .no-height, p.other-height)', 'p.other-height'];
            selectors.forEach((selector) => {
                const elements = wrapper.querySelectorAll(selector);
                resetHeights(elements);
                applySameHeightGroups(elements, groupSize);
            });
        });
    };

    // Desktop view (1024px and above)
    if (window.innerWidth >= desktopWidth) {
        processWrappers(wrappers, 3);
    }

    // Tablet view (768px to 1023px)
    if (window.innerWidth >= tabletWidth && window.innerWidth < desktopWidth) {
        processWrappers(wrappersTablet, 2);
    }

    // Mobile view (below 768px) - reset heights
    if (window.innerWidth < tabletWidth) {
        wrappersTablet.forEach((wrapper) => {
            const elements = wrapper.querySelectorAll('.same-height h3, .same-height h2, .same-height p:not(.btn-icon p, .no-height), p.other-height');
            resetHeights(elements);
        });

        wrappers.forEach((wrapper) => {
            const elements = wrapper.querySelectorAll('.same-height h3, .same-height h2, .same-height p:not(.btn-icon p, .no-height), p.other-height');
            resetHeights(elements);
        });
    }
}



