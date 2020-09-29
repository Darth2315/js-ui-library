import $ from './lib/lib';

$('button').on('click', function() {
    $('div').eq(1).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

// $('div').setAttribute('batman', 'alex');
// $('div').getAttribute('batman');
// $('div').removeAttribute('batman');

// console.log($('button').html('Hello'));

// console.log($('div').eq(2).find('.more'));

// console.log($('.more').closest('.findme'));

// console.log($('.findme').siblings());

$('button').fadeOut(3000);