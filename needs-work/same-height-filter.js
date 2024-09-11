// // Update element heights for three columns from 1024px upwards
// function updateElementHeightsFilter() {
//     const desktopWidth = 1024;

//     // Select all .same-height-wrapper containers
//     const wrappers = document.querySelectorAll('.same-height-wrapper-filter');
//     const selectors = [
//         '.same-height h3',
//         '.same-height h2',
//         '.same-height p:not(.btn-icon p, .no-height, p.other-height)',
//         'p.other-height'
//     ];

//     wrappers.forEach((wrapper) => {
//         if (window.innerWidth < desktopWidth) {
//             // Reset styles for mobile
//             resetElementHeights(wrapper, selectors.join(', '));
//         } else {
//             // Apply heights for desktop
//             selectors.forEach((selector) => {
//                 const elements = wrapper.querySelectorAll(selector);
//                 // Filter out elements with display: none
//                 const visibleElements = Array.from(elements).filter(el => getComputedStyle(el).display !== 'none');
//                 applyEqualHeight(visibleElements, 3);
//             });
//         }
//     });
// }

// // Helper function to reset element heights
// function resetElementHeights(wrapper, selector) {
//     const elements = wrapper.querySelectorAll(selector);
//     elements.forEach((el) => {
//         el.style.height = ''; // Reset height to auto
//     });
// }

// // Helper function to apply equal heights in groups
// function applyEqualHeight(elements, groupSize) {
//     elements.forEach((el) => (el.style.height = 'auto')); // Reset heights to auto

//     for (let i = 0; i < elements.length; i += groupSize) {
//         let maxHeight = 0;

//         // Calculate the tallest height in the current group
//         for (let j = i; j < i + groupSize && j < elements.length; j++) {
//             const elementHeight = elements[j].offsetHeight;
//             if (elementHeight > maxHeight) {
//                 maxHeight = elementHeight;
//             }
//         }

//         // Apply the tallest height to the current group
//         for (let j = i; j < i + groupSize && j < elements.length; j++) {
//             elements[j].style.height = `${maxHeight}px`;
//         }
//     }
// }

// // Run on page load
// updateElementHeightsFilter();

// // Run on window resize
// window.addEventListener('resize', updateElementHeightsFilter);


// $(document).ready(function () {
//     // Check if any #btnContainer exists on the page
//     if ($('[id^="btnContainer"]').length) {
//         // Initialize filters for each container
//         $('[id^="btnContainer"]').each(function () {
//             var containerId = $(this).attr('id');
//             console.log('Initializing filter for container:', containerId);

//             // Add event listeners to buttons within each container
//             $('#' + containerId + ' .btn').click(function () {
//                 console.log('Button clicked in container:', containerId);
//                 $('#' + containerId + ' .btn').removeClass('active'); // Remove active class from all buttons in the container
//                 $(this).addClass('active'); // Add active class to the clicked button

//                 var filter = $(this).data('filter');
//                 console.log('Filtering with criteria:', filter);
//                 filterSelection(containerId, filter);

//                 // Call the scroll function based on the filter
//                 scrollToFilter(containerId, filter);

//                  // Ensure height update happens after filtering and scrolling
//                  requestAnimationFrame(() => {
//                     // Delay height adjustment slightly to ensure filtering is completed
//                     setTimeout(() => updateElementHeightsFilter(), 0);
//                 });
//             });
//         });
//     }
// });

// function scrollToFilter(containerId, filter) {
//     var navHeight = 0; // Adjust this if you have a fixed header

//     if (filter === "all") {
//         // Scroll to the top of the filter wrapper, adjusted for the fixed header
//         $("html, body").animate({
//             scrollTop: $('#' + containerId).next('.filter-wrapper').offset().top - navHeight
//         }, 300);
//     } else {
//         var target = $('#' + containerId).next('.filter-wrapper').find('.filter-item.' + filter).first();
//         if (target.length) {
//             // Scroll to the target item, adjusted for the fixed header
//             $("html, body").animate({
//                 scrollTop: target.offset().top - navHeight
//             }, 300);
//         }
//     }
// }


// function filterSelection(containerId, filter) {
//     const $filterWrapper = $('#' + containerId).next('.filter-wrapper');

//     // Hide all filter items on button click
//     $filterWrapper.find('.filter-item').css('display', 'none');

//     if (filter === "all") {
//         // Show all items if "all" filter is selected
//         $filterWrapper.find('.filter-item').css('display', 'flex');
//     } else {
//         // Show only items that match the filter
//         $filterWrapper.find('.filter-item').each(function () {
//             if ($(this).hasClass(filter)) {
//                 $(this).css('display', 'flex');
//             }
//         });
//     }
// }