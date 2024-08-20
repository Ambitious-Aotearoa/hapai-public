
$(document).ready(function() {
    function equalizeHeights(selector) {
        var maxHeight = 0;

        // Reset heights to auto to ensure proper calculation
        $(selector).css('height', 'auto');

        // Find the maximum height
        $(selector).each(function() {
            var thisHeight = $(this).height();
            if (thisHeight > maxHeight) {
                maxHeight = thisHeight;
            }
        });

        // Set all elements to the maximum height
        $(selector).height(maxHeight);
    }

    function equalizeAll() {
        equalizeHeights('.same-height');
        equalizeHeights('.same-height h3');
        equalizeHeights('.same-height p:not(button p)');
    }

    // Run on page load
    equalizeAll();

    // Run on window resize
    $(window).resize(function() {
        equalizeAll();
    });

});
