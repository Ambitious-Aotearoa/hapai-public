
//   $(document).ready(function() {
//     let currentTab = 0;
//     showTab(currentTab); 
  
//     // Show the specified tab of the form
//     function showTab(n) {
//       $(".form-tab").css("display", "none"); 
//       $(".form-tab").eq(n).css("display", "flex");
//       $("#prevBtn").css("visibility", n === 0 ? "hidden" : "visible");
//       $("#nextBtn").text(n === $(".form-tab").length - 1 ? "Submit" : "Next");
//       updateStepIndicator(n); 
//     }
  
//     // Navigate to the next or previous form-tab
//     window.nextPrev = function(n) {
//         currentTab += n; // Increase or decrease the current tab by 1
//         if (currentTab >= $(".form-tab").length) {
//           $("#regForm").submit(); // Submit the form if at the end
//         } else {
//           showTab(currentTab); // Otherwise, show the correct tab
//         }
//     };
  
//     // Update the step indicator
//     function updateStepIndicator(n) {
//       $(".step").removeClass("active").eq(n).addClass("active"); 
//     }
//   });
  
  
$(document).ready(function () {
    let currentTab = 0; // Start at the first tab
    showTab(currentTab); // Display the initial tab

    // Function to show the specified tab
    function showTab(n) {
        $(".form-tab").css("display", "none"); // Hide all tabs
        $(".form-tab").eq(n).css("display", "flex"); // Show the current tab

        // Adjust button visibility and text
        $("#prevBtn").css("visibility", n === 0 ? "hidden" : "visible");
        $("#nextBtn").text(n === $(".form-tab").length - 1 ? "Submit" : "Next");
        $("#paynow").text(n === $(".form-tab").length - 1 ? "Pay now" : "Next");
        // Update step indicator
        updateStepIndicator(n);
    }

    // Function to handle navigation between tabs
    window.nextPrev = function (n) {
        // Get all inputs in the current tab
        const currentTabInputs = $(".form-tab").eq(currentTab).find("input, select, textarea");

        // Validate current tab before moving forward
        if (n === 1 && !validateForm(currentTabInputs)) {
            return false; // Stop if validation fails
        }

        currentTab += n; // Update the current tab index

        if (currentTab >= $(".form-tab").length) {
            $("#regForm").submit(); // Submit the form if it's the last step
        } else {
            showTab(currentTab); // Otherwise, show the correct tab
        }
    };

    // Validation function for the current tab
    function validateForm(inputs) {
        let valid = true;

        // Loop through inputs and check validity
        inputs.each(function () {
            if (!this.checkValidity()) {
                $(this).addClass("is-invalid"); // Add error class
                $(this).next(".invalid-feedback").remove(); // Remove any existing error message
                $(this).after(`<div class="invalid-feedback">${this.validationMessage}</div>`); // Add error message
                valid = false;
            } else {
                $(this).removeClass("is-invalid"); // Remove error class
                $(this).next(".invalid-feedback").remove(); // Remove error message
            }
        });

        return valid; // Return true if all inputs are valid
    }

    // Function to update the step indicator
    function updateStepIndicator(n) {
        $(".step").removeClass("active").eq(n).addClass("active");
    }
});
