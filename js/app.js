let bg = document.getElementById('bg');
let left_image = document.getElementById('img-left');
// let right_image = document.getElementById('img-right');
// let floor = document.getElementById('floor');
let text = document.getElementById('text');

window.addEventListener('scroll', () => {
    const value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';

    left_image.style.left = -value * 0.15 + 'px';

    // right_image.style.top = value * 0.15 + 'px';

    // floor.style.top = value * 0.15 + 'px';

    text.style.top = value * 1 + 'px';

});