$(document).ready(function() {
    function equalizeInnerHeights(elements) {
        var maxHeight = 0;

        elements.css('height', 'auto');

        elements.each(function() {
            var thisHeight = $(this).height();
            if (thisHeight > maxHeight) {
                maxHeight = thisHeight;
            }
            // Log the height of each inner element
            //console.log('Inner element height:', thisHeight);
        });

        // Log the maximum height for inner elements
        // console.log('Max inner height:', maxHeight);

        elements.height(maxHeight);

        // Log the applied height to ensure it's being set correctly
        // elements.each(function() {
        //     console.log('Applied inner height:', $(this).height());
        // });
    }

    function equalizeHeights(wrapper) {
        $(wrapper).each(function() {
            var maxHeight = 0;
            var elements = $(this).find('.same-height');

            // Reset heights to auto to ensure proper calculation
            elements.css('height', 'auto');

            // Force a reflow to recalculate heights
            elements.each(function() {
                $(this).height('auto');
            });

            // Find the maximum height within the current wrapper
            elements.each(function() {
                var thisHeight = $(this).height();
                if (thisHeight > maxHeight) {
                    maxHeight = thisHeight;
                }
            });

            // Set all elements within the current wrapper to the maximum height
            elements.height(maxHeight);

            // Log the applied height to ensure it's being set correctly
            // elements.each(function() {
            //     console.log('Applied height:', $(this).height());
            // });

            // Equalize heights for inner elements
            equalizeInnerHeights($(this).find('.same-height h3'));
            equalizeInnerHeights($(this).find('.same-height p:not(button p)'));
        });
    }

    function resetHeights(wrapper) {
        $(wrapper).find('.same-height').css('height', 'auto');
        // Force a reflow to recalculate heights
        $(wrapper).find('.same-height').each(function() {
            $(this).height('auto');
        });
    }

    function handleResizeOrOrientationChange() {
        //console.log('Resize or orientation change detected.');
        equalizeAll();
    }

    function equalizeAll() {
        //console.log('Equalizing all heights...');
        equalizeHeights('.same-height-wrapper');
    }

    // Run on page load
    //console.log('Page loaded.');
    equalizeAll();

    // Run on window resize and orientation change
    $(window).on('resize orientationchange', function() {
        setTimeout(handleResizeOrOrientationChange, 100); // Allow some time for layout to stabilize
    });

    // Trigger resize/orientationchange on load
    $(window).trigger('resize');
});
