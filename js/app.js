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

// toggle the nav menu
{ /* <script type="text/javascript "> */ }
// add sticky to the active class
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

// toggle the menu open and close
function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navi');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
// </script>



// <!-- handle toggle form -->
// get the ids
const email = document.querySelector('.email');
const message = document.querySelector('.message');
// const requestPrices = document.querySelectorAll(".request-price");

const cancel = document.getElementById("btn_cancel");

//To Do : May need to use querySelectorAll for email and loop thru it
// add listeners
email.addEventListener('click', sendMessage);

// select all the btns with request-price class, add listener
const requestPrices = document.querySelectorAll(".request-price");
for (let i = 0; i < requestPrices.length; i++) {
    if (i !== "active") {
        requestPrices[i].addEventListener('click', sendMessage);
    } else {
        requestPrices[i].addEventListener('click', cancelForm);
    }
}

// make class active to show the form
function sendMessage() {
    message.classList.add("active");
    email.classList.add("active");
    // requestPrices[i].classList.add("active");
}
cancel.addEventListener('click', cancelForm);
// func to remove active state so the form will hide
function cancelForm() {
    message.classList.remove('active');
    email.classList.remove('active');
    // requestPrices[i].remove('active');
}
// End form handle