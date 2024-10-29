
  $(document).ready(function() {
    let currentTab = 0;
    showTab(currentTab); 
  
    // Show the specified tab of the form
    function showTab(n) {
      $(".form-tab").css("display", "none"); 
      $(".form-tab").eq(n).css("display", "flex");
      $("#prevBtn").css("visibility", n === 0 ? "hidden" : "visible");
      $("#nextBtn").text(n === $(".form-tab").length - 1 ? "Submit" : "Next");
      updateStepIndicator(n); 
    }
  
    // Navigate to the next or previous form-tab
    window.nextPrev = function(n) {
        currentTab += n; // Increase or decrease the current tab by 1
        if (currentTab >= $(".form-tab").length) {
          $("#regForm").submit(); // Submit the form if at the end
        } else {
          showTab(currentTab); // Otherwise, show the correct tab
        }
    };
  
    // Update the step indicator
    function updateStepIndicator(n) {
      $(".step").removeClass("active").eq(n).addClass("active"); 
    }
  });
  
  
  