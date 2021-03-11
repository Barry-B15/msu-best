var left_image = document.getElementById('img-left');
scroll = window.pageYOffset;
document.addEventListener('scroll',
    function(e) {
        var offset = window.pageYOffset;
        scroll = offset;
        left_image.style.width = (100 + scroll / 5) + '%';
    });

var right_image = document.getElementById('img-right');
scroll = window.pageYOffset;
document.addEventListener('scroll',
    function(e) {
        var offset = window.pageYOffset;
        scroll = offset;
        right_image.style.width = (100 + scroll / 5) + '%';
        right_image.style.left = scroll / 5 + '%';
    });

var text = document.getElementById('text')
scroll = window.pageYOffset;
document.addEventListener('scroll',
    function(e) {
        var offset = window.pageYOffset;
        scroll = offset;
        right_image.style.width = (100 + scroll / 5) + '%';

        text.style.top = -scroll / 20 + '%';
    });