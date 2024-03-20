$(function() {
    $('.carousel-text').html($('#slide-content-0').html());

    $('#cdc-custom-carousel').on('slid.bs.carousel', function() {
        var id = $('.item.active').data('slide-number');
        console.log('slide-number:', id);
        $('.carousel-text').html($('#slide-content-' + id).html());
    });

});

$('#cdc-custom-carousel').on('slide.bs.carousel', function(t) {
    $('.indicators a').removeClass('active');
    var activeindicator = $('.indicators').find("[data-slide-to='" + t.to + "']"),
        indicatorisvisible = activeindicator.is(':visible');

    if (t.direction == "left") {
        if (!indicatorisvisible) {
            $('#c2').carousel('next');
        }
    }
    if (t.direction == "right") {
        if (!indicatorisvisible) {
            $('#c2').carousel('prev');
        }
    }
    activeindicator.addClass('active');

});


// youtubes
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player1, player2, player3, player4;

function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('player1', {
        videoId: 'MdzxOOAeQ4M',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
    player2 = new YT.Player('player2', {
        videoId: 'hdXcvLzTjyQ',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
    player3 = new YT.Player('player3', {
        videoId: 'Y0E9MOmQF88',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
    player4 = new YT.Player('player4', {
        videoId: '94iJrtbgeYk',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
    player5 = new YT.Player('player5', {
        videoId: 'vYNlGdsxlKM',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
    player6 = new YT.Player('player6', {
        videoId: 'nX1DM8InENA',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });


}

function onPlayerReady(event) {
    // console.log('onPlayerReady:', event);
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    // console.log('onPlayerStateChange:', event);
    if (event.data == YT.PlayerState.PLAYING) {
        $('.carousel-caption').hide();
    }
    if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
        $('.carousel-caption').show();
    }
}
// carousel
var carousel = $('#cdc-custom-carousel'),
    current = 0;
carousel.on('slide.bs.carousel', function(event) {
    current = event.to;
    player1.stopVideo();
    player2.stopVideo();
    player3.stopVideo();
    player4.stopVideo();

    // console.log('current: ', current)
    toggleActive();
});

function toggleActive() {
    $('.list-inline-item').removeClass("active");
    $("a[data-slide-to='" + current + "']").parent().addClass('active');
}

var idx = 0;
$(function() {
    var items = $('.carousel-indicatorz li'),
        arr = new Array(items.length),
        item_width = items.outerWidth(),
        left_value = item_width * (-1);

    $('#next').on('click', function() {
        carousel.carousel('next');
        $('.carousel-indicatorz li:last').after($('.carousel-indicatorz li:first'));

    });
    $('#prev').on('click', function() {
        carousel.carousel('prev');
        $('.carousel-indicatorz li:first').before($('.carousel-indicatorz li:last'));


    });

    function removeclass() {
        var cards = document.getElementsByClassName('list-inline-item');
        for (var i = 0; i < cards.length; i++) {
            cards.item(i).classList.remove('active');
        }
    }
});