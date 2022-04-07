// This page is for menu toggle and the contact form
// USE IT ON THE PAGES THAT DONT HAVE OUR HERO

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

    // close the form after dragging
    message.style.left = null;
    message.style.top = null;
}
// End form handle