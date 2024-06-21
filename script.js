// Toggle class active
const navbarNav = document.querySelector
    ('.navbar-nav');

document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik diluar elemen
const menu = document.querySelector('#menu');
const search = document.querySelector('#search-button');
const shop = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!search.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if (!shop.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault()
};

// Toggle class active untuk shopping cart

const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
});



// Close Icon
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault
};

window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = "none"
    }
};