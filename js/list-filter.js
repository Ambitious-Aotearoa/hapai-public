$(document).ready(function() {
    
    ////Sort Items alphabetically
    var items = $('ul.column-count li').get(); 
    items.sort(function(a, b) {
      return $(a).text().localeCompare($(b).text());
    });
    $.each(items, function(i, li) {
      $('ul.column-count ').append(li);
    });

    

    ////Add category header
    var insertedLetters = {};
    $('ul.column-count li').each(function() {
        var firstLetter = $(this).text().trim().charAt(0).toUpperCase();
        if (!insertedLetters[firstLetter]) {
            $(this).before('<li class="letter-heading">' + firstLetter + '</li>');
            insertedLetters[firstLetter] = true;
        }
    });



    ////Filter for categories
    $('ul.list-filter li').click(function() {
        $('ul.list-filter li').removeClass('active');
        $(this).addClass('active');

        var filter = $(this).data('filter');
        
        $('ul.column-count li').show();


        if (filter === 'af') {
            $('ul.column-count li').filter(function() {
                return !/^[A-F]/.test($(this).text());
            }).hide();
        } else if (filter === 'gm') {
            $('ul.column-count li').filter(function() {
                return !/^[G-M]/.test($(this).text());
            }).hide();
        } else if (filter === 'ns') {
            $('ul.column-count li').filter(function() {
                return !/^[N-S]/.test($(this).text());
            }).hide();
        } else if (filter === 'tz') {
            $('ul.column-count li').filter(function() {
                return !/^[T-Z]/.test($(this).text());
            }).hide();
        }
    });
});
