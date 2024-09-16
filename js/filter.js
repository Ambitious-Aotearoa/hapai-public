
$(document).ready(function () {
    // Check if any #btnContainer exists on the page
    if ($('[id^="btnContainer"]').length) {
        // Initialize filters for each container
        $('[id^="btnContainer"]').each(function () {
            var containerId = $(this).attr('id');
            console.log('Initializing filter for container:', containerId);

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
});

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

function filterSelection(containerId, filter) {
    // Hide all filter items on button click
    $('#' + containerId).next('.filter-wrapper').find('.filter-item').css('display', 'none');

    if (filter === "all") {
        // Show all items if "all" filter is selected
        $('#' + containerId).next('.filter-wrapper').find('.filter-item').css('display', 'flex');
    } else {
        // Show only items that match the filter
        $('#' + containerId).next('.filter-wrapper').find('.filter-item').each(function () {
            if ($(this).hasClass(filter)) {
                $(this).css('display', 'flex');
            }
        });
    }
}








