import $ from './lib/lib';

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title #1',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus qui ut, est incidunt facilis iure! Enim assumenda, ipsa, error dolor maxime sint expedita tenetur nulla aperiam fugiat necessitatibus illo cumque.'
    },
    btns: {
       count: 2,
       settings: [
           [
               'Close',
               ['btn-danger', 'mr-10'],
               true
           ],
           [
               'Save changes',
               ['btn-success'],
               false,
               () => {
                   alert('Данные сохранены');
               }
           ]
       ] 
    }
}));












// Exemple

// $('button').on('click', function() {
//     $('div').eq(1).toggleClass('active');
// });

// $('div').click(function() {
//     console.log($(this).index());
// });

// $('div').setAttribute('batman', 'alex');
// $('div').getAttribute('batman');
// $('div').removeAttribute('batman');

// console.log($('button').html('Hello'));

// console.log($('div').eq(2).find('.more'));

// console.log($('.more').closest('.findme'));

// console.log($('.findme').siblings());

// $('button').fadeOut(3000);