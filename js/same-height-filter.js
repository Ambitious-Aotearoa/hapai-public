$(document).ready(function () {
    // Check if #btnContainer is present
    if ($("#btnContainer").length) {
        filterSelection("all");

        // Add event listeners to buttons
        $("#btnContainer .btn").click(function () {
            $("#btnContainer .btn").removeClass("active"); // Remove active class from all buttons
            $(this).addClass("active"); // Add active class to the clicked button

            var filter = $(this).data("filter");
            filterSelection(filter);

            // Recalculate heights after filtering
            setTimeout(updateElementHeights, 100); // Delay to ensure DOM is updated
        });

        // Scroll to clicked section on mobile
        $("#btnContainer .btn").click(function () {
            var filter = $(this).data("filter");

            if (filter === "all") {
                $("html, body").animate({
                    scrollTop: $(".filter-wrapper").offset().top,
                }, 300);
            } else {
                var target = $(".filter-item." + filter).first();
                if (target.length) {
                    var navHeight = 0; // Adjust this if you have a fixed header
                    $("html, body").animate({
                        scrollTop: target.offset().top - navHeight,
                    }, 300);
                }
            }
        });
    }

    // Check if .same-height-wrapper is present
    if ($(".same-height-wrapper").length) {
        updateElementHeights();

        // Run on window resize
        window.addEventListener('resize', updateElementHeights);
    }
});

function filterSelection(c) {
    if (c === "all") c = "";

    $(".filter-item").each(function () {
        $(this).removeClass("show");
        if ($(this).hasClass(c) || c === "") {
            $(this).addClass("show");
        }
    });

    // Recalculate heights after filtering
    setTimeout(updateElementHeights, 100); // Delay to ensure DOM is updated
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
