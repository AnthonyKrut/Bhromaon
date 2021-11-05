'use strict';

$(document).ready(() => {

    // adding smooth scroll in navigation

    $('a[href^="#"').click(e => {
        e.preventDefault();
        let href = $(e.target).closest('a').attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000);
        return false;
    });
});