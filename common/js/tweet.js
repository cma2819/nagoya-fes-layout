// state: 'on' / 'off'
function toggleTweet(state) {
    console.log('#tweet-' + state);
    let showed = state;
    let hidden = (state == 'on') ? 'off' : 'on';
    $('#tweet > div').animate({
        'left': '+=10px',
        'opacity': '0'
    }, 600);
    $('#tweet-' + showed).animate({
        'left': '-=10px',
        'opacity': '1'
    }, 600, 'swing', () => {
        $('#tweet-' + hidden).css({
            'left': '-=10px'
        });
    });
}

var tw = 'off';
$('#logo').click(() => {
    if(tw == 'off') {
        tw = 'on';
    } else {
        tw = 'off';
    }
    toggleTweet(tw);
});
