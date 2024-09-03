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

// Scroll to clicked section on mobile
function scrollToFilter(containerId, filter) {
    if (filter === "all") {
        $("html, body").animate(
            {
                scrollTop: $('#' + containerId).next('.filter-wrapper').offset().top,
            },
            300
        );
    } else {
        var target = $('#' + containerId).next('.filter-wrapper').find('.filter-item.' + filter).first();
        if (target.length) {
            var navHeight = 200; // Adjust this if you have a fixed header
            $("html, body").animate({
                scrollTop: target.offset().top + navHeight,
            }, 300);
        }
    }
}
