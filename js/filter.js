
$(document).ready(function () {
    // Check if any #btnContainer exists on the page
    if ($('[id^="btnContainer"]').length) {
        // Initialize filters for each container
        $('[id^="btnContainer"]').each(function () {
            var containerId = $(this).attr('id');

            // Add event listeners to buttons within each container
            $('#' + containerId + ' .btn').click(function () {
                $('#' + containerId + ' .btn').removeClass('active'); 
                $(this).addClass('active'); 

                var filter = $(this).data('filter');
                filterSelection(containerId, filter);
                scrollToFilter(containerId, filter);
            });
        });
    }
});

function scrollToFilter(containerId, filter) {
    var navHeight = $('nav').outerHeight()

    if (filter === "all") {
        $("html, body").animate({
            scrollTop: $('#' + containerId).next('.filter-wrapper').offset().top - navHeight
        }, 300);
    } else {
        var target = $('#' + containerId).next('.filter-wrapper').find('.filter-item.' + filter).first();
        if (target.length) {
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








