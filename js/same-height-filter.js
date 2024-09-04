
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
    if ($(".same-height-wrapper").length) {
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

    // Select all .same-height-wrapper containers
    const wrappers = document.querySelectorAll('.same-height-wrapper');

    wrappers.forEach((wrapper) => {
        const selectors = ['.same-height h3', '.same-height h2', '.same-height p:not(.btn-icon p, .no-height, p.other-height)', 'p.other-height']; // List of child elements to target within each wrapper

        selectors.forEach((selector) => {
            const elements = wrapper.querySelectorAll(selector);

            // Reset heights to auto to recalculate
            elements.forEach((el) => {
                el.style.height = 'auto'; // Reset height to auto
            });

            // Apply same height in groups of three
            for (let i = 0; i < elements.length; i += 3) {
                let maxHeight = 0;

                // Calculate the tallest height in the current group of three
                for (let j = i; j < i + 3 && j < elements.length; j++) {
                    const elementHeight = elements[j].offsetHeight;
                    if (elementHeight > maxHeight) {
                        maxHeight = elementHeight;
                    }
                }

                // Apply the tallest height to the current group of three
                for (let j = i; j < i + 3 && j < elements.length; j++) {
                    elements[j].style.height = `${maxHeight}px`;
                }
            }
        });
    });

    // Reset styles for mobile
    if (window.innerWidth < desktopWidth) {
        wrappers.forEach((wrapper) => {
            const elements = wrapper.querySelectorAll('.same-height h3, .same-height h2, .same-height p:not(.btn-icon p, .no-height), p.other-height');
            elements.forEach((el) => {
                el.style.height = ''; // Reset height to auto
            });
        });


    }
}
