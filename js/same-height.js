function updateElementHeights() {
  const desktopWidth = 1024

  // Select all .same-height-wrapper containers
  const wrappers = document.querySelectorAll('.same-height-wrapper')

  wrappers.forEach((wrapper) => {
    const selectors = ['.same-height h3', '.same-height h2', '.same-height p:not(.btn-icon p, .no-height)'] // List of child elements to target within each wrapper

    selectors.forEach((selector) => {
      const elements = wrapper.querySelectorAll(selector)

      // Reset heights to auto to recalculate
      elements.forEach((el) => {
        el.style.height = 'auto' // Reset height to auto
      })

      // Apply same height in groups of three
      for (let i = 0; i < elements.length; i += 3) {
        let maxHeight = 0

        // Calculate the tallest height in the current group of three
        for (let j = i; j < i + 3 && j < elements.length; j++) {
          const elementHeight = elements[j].offsetHeight
          if (elementHeight > maxHeight) {
            maxHeight = elementHeight
          }
        }

        // Apply the tallest height to the current group of three
        for (let j = i; j < i + 3 && j < elements.length; j++) {
          elements[j].style.height = `${maxHeight}px`
        }
      }
    })
  })

  // Reset styles for mobile
  if (window.innerWidth < desktopWidth) {
    wrappers.forEach((wrapper) => {
      const elements = wrapper.querySelectorAll('.same-height h3, .same-height h2, .same-height p:not(.btn-icon p, .no-height)')
      elements.forEach((el) => {
        el.style.height = '' // Reset height to auto
      })
    })
  }
}

// Run on page load
updateElementHeights()

// Run on window resize
window.addEventListener('resize', updateElementHeights)
