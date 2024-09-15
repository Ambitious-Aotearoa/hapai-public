//from 768 2 cols, from 1024px 3 cols

// Constants for breakpoints
const DESKTOP_WIDTH = 1024
const TABLET_WIDTH = 768

// Common selectors to target elements
const selectors = ['.same-height h3', '.same-height h2', '.same-height .add-height']

// Main function to update element heights based on screen width
function updateElementHeights() {
  const width = window.innerWidth
  const wrappers = document.querySelectorAll('.same-height-wrapper-2-3col')

  wrappers.forEach((wrapper) => {
    if (width >= DESKTOP_WIDTH) {
      adjustHeights(wrapper, selectors, 3) // 3 columns for desktop
    } else if (width >= TABLET_WIDTH) {
      adjustHeights(wrapper, selectors, 2) // 2 columns for tablet
    } else {
      resetElementHeights(wrapper, selectors.join(', ')) // Reset for mobile
    }
  })
}

// Helper function to adjust heights for the given group size
function adjustHeights(wrapper, selectors, groupSize) {
  selectors.forEach((selector) => {
    const elements = wrapper.querySelectorAll(selector)
    const visibleElements = Array.from(elements).filter((el) => getComputedStyle(el).display !== 'none')
    applyEqualHeight(visibleElements, groupSize)
  })
}

// Helper function to reset element heights
function resetElementHeights(wrapper, selector) {
  const elements = wrapper.querySelectorAll(selector)
  elements.forEach((el) => {
    el.style.height = '' // Reset height to auto
  })
}

// Helper function to apply equal heights in groups
function applyEqualHeight(elements, groupSize) {
  elements.forEach((el) => (el.style.height = 'auto')) // Reset heights to auto

  for (let i = 0; i < elements.length; i += groupSize) {
    let maxHeight = 0

    // Calculate the tallest height in the current group
    for (let j = i; j < i + groupSize && j < elements.length; j++) {
      const elementHeight = elements[j].offsetHeight
      if (elementHeight > maxHeight) {
        maxHeight = elementHeight
      }
    }

    // Apply the tallest height to the current group
    for (let j = i; j < i + groupSize && j < elements.length; j++) {
      elements[j].style.height = `${maxHeight}px`
    }
  }
}

updateElementHeights()
// Run on page load and resize

window.addEventListener('resize', updateElementHeights)
