$(function () {
    $('#scanimation img:not(:first)').hide();
    $('#scanimation img').css('position', 'absolute');
    $('#scanimation img').each(function () {
        var img = $(this);
        $('<img>').attr('src', $(this).attr('src')).load(function () {});
    });

    var pause = false;

    function fadeNext() {
        $('#scanimation img').first().fadeOut().appendTo($('#scanimation'));
        $('#scanimation img').first().fadeIn();
    }

    function fadePrev() {
        $('#scanimation img').first().fadeOut();
        $('#scanimation img').last().prependTo($('#scanimation')).fadeIn();
    }

    function doRotate() {
        if (!pause) {
            fadeNext();
        }
    }

    var rotate = setInterval(doRotate, 8000);
});
