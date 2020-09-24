import $ from './lib/lib';

$('button').on('click', function() {
    $(this).toggleClass('active');
});

$('div').setAttribute('batman', 'alex');
$('div').getAttribute('batman');
$('div').removeAttribute('batman');
