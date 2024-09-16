// Constants for breakpoints
const DESKTOP_LG_WIDTH = 1366
const DESKTOP_WIDTH = 1024
const TABLET_WIDTH = 768

// Common selectors to target elements
const selectors = ['.same-height h3', '.same-height h2', '.same-height .add-height', '.add-height-other']

// Main function to update element heights based on screen width
function updateElementHeights() {
  const width = window.innerWidth

  // Helper function to apply the correct column layout
  function handleWrapper(wrapper, desktopCols, tabletCols) {
    if (width >= DESKTOP_WIDTH) {
      adjustHeights(wrapper, selectors, desktopCols) // Apply desktop columns
    } else if (width >= TABLET_WIDTH) {
      adjustHeights(wrapper, selectors, tabletCols) // Apply tablet columns
    } else {
      resetElementHeights(wrapper, selectors.join(', ')) // Reset for mobile
    }
  }

  // For 2 columns on tablet and 3 columns on desktop
  const wrappers2To3 = document.querySelectorAll('.same-height-wrapper-2-3col')
  wrappers2To3.forEach((wrapper) => {
    if (width >= DESKTOP_LG_WIDTH) {
      adjustHeights(wrapper, selectors, 3)
    } else if (width >= TABLET_WIDTH) {
      adjustHeights(wrapper, selectors, 2)
    } else {
      resetElementHeights(wrapper, selectors.join(', '))
    }
  })
  // For 2 columns on tablet and 4 columns on large desktop
  const wrappers4 = document.querySelectorAll('.same-height-wrapper-4col')
  wrappers4.forEach((wrapper) => {
    if (width >= DESKTOP_LG_WIDTH) {
      adjustHeights(wrapper, selectors, 4)
    } else if (width >= TABLET_WIDTH) {
      adjustHeights(wrapper, selectors, 2)
    } else {
      resetElementHeights(wrapper, selectors.join(', '))
    }
  })

  // For 2 columns only on desktop (1024px and up)
  const wrappers2 = document.querySelectorAll('.same-height-wrapper-2col')
  wrappers2.forEach((wrapper) => {
    if (width >= DESKTOP_WIDTH) {
      adjustHeights(wrapper, selectors, 2)
    } else {
      resetElementHeights(wrapper, selectors.join(', '))
    }
  })

  // For 3 columns on desktop
  const wrappers3 = document.querySelectorAll('.same-height-wrapper')
  wrappers3.forEach((wrapper) => {
    if (width >= DESKTOP_WIDTH) {
      adjustHeights(wrapper, selectors, 3)
    } else {
      resetElementHeights(wrapper, selectors.join(', '))
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

// Run on page load and window resize
updateElementHeights()
window.addEventListener('resize', updateElementHeights)
