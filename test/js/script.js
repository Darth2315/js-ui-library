window.addEventListener("DOMContentLoaded", () => {
    'use strict';
    
    const name ="Alex";
    $('h2').eq(0).html(`Это предложение именно для вас, ${name}`);
});