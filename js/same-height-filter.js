
$(document).ready(function () {
    // Check if any #btnContainer exists on the page
    if ($('[id^="btnContainer"]').length) {
        // Initialize filters for each container
        $('[id^="btnContainer"]').each(function () {
            var containerId = $(this).attr('id');

            filterSelection(containerId, "all");
          
            // Add event listeners to buttons within each container
            $('#' + containerId + ' .btn').click(function () {

                $('#' + containerId + ' .btn').removeClass('active'); // Remove active class from all buttons in the container
                $(this).addClass('active'); // Add active class to the clicked button
            
                var filter = $(this).data('filter');

                filterSelection(containerId, filter);

                // Call the scroll function based on the filter
                scrollToFilter(containerId, filter);
            });
        });
    }
    // Check if .same-height-wrapper is present
    if ($(".same-height-wrapper, .same-height-wrapper-two-col").length) {
        updateElementHeights();

        // Run on window resize
        window.addEventListener('resize', updateElementHeights);
    }
});

function filterSelection(containerId, filter) {
    if (filter === "all") filter = "";
  

    $('#' + containerId).next('.filter-wrapper').find('.filter-item').each(function () {

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




function updateElementHeights() {
    const desktopWidth = 1024;
    const tabletWidth = 768;

    const selectors = ['.same-height h3', '.same-height h2', '.same-height p:not(.btn-icon p, .no-height, p.other-height)', 'p.other-height'];
    
    const wrappers = document.querySelectorAll('.same-height-wrapper');
    const wrappersTablet = document.querySelectorAll('.same-height-wrapper.tablet-style');
    const wrappersTwoCol = document.querySelectorAll('.same-height-wrapper-two-col');

    const resetHeights = (elements) => {
        elements.forEach((el) => {
            el.style.height = 'auto'; // Reset height to auto
        });
    };

    const applySameHeightGroups = (elements, groupSize) => {
        for (let i = 0; i < elements.length; i += groupSize) {
            let maxHeight = 0;
            for (let j = i; j < i + groupSize && j < elements.length; j++) {
                const elementHeight = elements[j].offsetHeight;
                if (elementHeight > maxHeight) {
                    maxHeight = elementHeight;
                }
            }
            for (let j = i; j < i + groupSize && j < elements.length; j++) {
                elements[j].style.height = `${maxHeight}px`;
            }
        }
    };

    const processWrappers = (wrappers, groupSize) => {
        wrappers.forEach((wrapper) => {
            selectors.forEach((selector) => {
                const elements = wrapper.querySelectorAll(selector);
                resetHeights(elements);
                applySameHeightGroups(elements, groupSize);
            });
        });
    };

    const resetAllHeights = (wrappers) => {
        wrappers.forEach((wrapper) => {
            selectors.forEach((selector) => {
                const elements = wrapper.querySelectorAll(selector);
                resetHeights(elements);
            });
        });
    };

    if (window.innerWidth >= desktopWidth) {
        processWrappers(wrappers, 3);
        processWrappers(wrappersTwoCol, 2);
    } else if (window.innerWidth >= tabletWidth) {
        processWrappers(wrappersTablet, 2);
        processWrappers(wrappersTwoCol, 2);
    } else {
        resetAllHeights(wrappers);
        resetAllHeights(wrappersTablet);
        resetAllHeights(wrappersTwoCol);
    }
}
