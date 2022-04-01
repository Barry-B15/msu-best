// show big image in window when mouse over
// get the small imgs
const thumb = document.querySelectorAll('.thumbnail');
// get the pos for the big img
// const bigImg = document.querySelector('.big-img');
const bigImg = document.querySelector('.featured__img');
// set the thumb count featured
var imgCount;

// loop thru the thumbnails
for (imgCount = 0; imgCount < thumb.length; imgCount++) {
    //when a thumbnail is moused over, show in window
    thumb[imgCount].onmouseover = function() {
        bigImg.src = this.src;
    }
}