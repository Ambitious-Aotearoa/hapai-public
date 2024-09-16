$(document).ready(function() {
    var navHeight = 0;
    // Add click event listener to the buttons
    $('#filter button').on('click', function() {
        var filterValue = $(this).data('filter');
        $('.filter-wrapper-other .filter-item').removeClass('show');
        $('.filter-wrapper-other .filter-item.' + filterValue).addClass('show');


        var buttonTop = $('.content-filter').offset().top;
        $("html, body").animate({
            scrollTop: buttonTop - navHeight
        }, 300);
    });
});


