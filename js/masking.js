$(document).ready(function() {
    var navHeight = 0;
    $('#filter button').on('click', function() {
        var filterValue = $(this).data('filter');

        $('#filter button').removeClass('active');
        $(this).addClass('active');

        
        $('.filter-wrapper-other .filter-item').removeClass('show');
        $('.filter-wrapper-other .filter-item.' + filterValue).addClass('show');


        // var buttonTop = $('.content-filter').offset().top;
        // $("html, body").animate({
        //     scrollTop: buttonTop - navHeight
        // }, 300);
    });
});


