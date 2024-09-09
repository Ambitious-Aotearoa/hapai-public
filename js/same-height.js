
  

// Update element heights for three columns from 1024px upwards
function updateElementHeights() {
    const desktopWidth = 1024;

    // Select all .same-height-wrapper containers
    const wrappers = document.querySelectorAll('.same-height-wrapper');
    const selectors = [
        '.same-height h3',
        '.same-height h2',
        '.same-height p:not(.btn-icon p, .no-height, p.other-height)',
        'p.other-height'
    ];

    wrappers.forEach((wrapper) => {
        if (window.innerWidth < desktopWidth) {
            // Reset styles for mobile
            resetElementHeights(wrapper, selectors.join(', '));
        } else {
            // Apply heights for desktop
            selectors.forEach((selector) => {
                const elements = wrapper.querySelectorAll(selector);
                // Filter out elements with display: none
                const visibleElements = Array.from(elements).filter(el => getComputedStyle(el).display !== 'none');
                applyEqualHeight(visibleElements, 3);
            });
        }
    });
}

// Helper function to reset element heights
function resetElementHeights(wrapper, selector) {
    const elements = wrapper.querySelectorAll(selector);
    elements.forEach((el) => {
        el.style.height = ''; // Reset height to auto
    });
}

// Helper function to apply equal heights in groups
function applyEqualHeight(elements, groupSize) {
    elements.forEach((el) => (el.style.height = 'auto')); // Reset heights to auto

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
}

// Run on page load
updateElementHeights();

// Run on window resize
window.addEventListener('resize', updateElementHeights);