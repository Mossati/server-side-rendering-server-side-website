// =========================================================================
// navbar animation
// =========================================================================
btnNavRemove = document.querySelector('.btn-nav-remove');
btnMenu = document.querySelector('.btn-menu');
toggledNavMenu = document.querySelector('.toggled-navbar-list');

btnMenu.addEventListener("click", function(){
    toggledNavMenu.classList.remove('navbar-slide-up');
    toggledNavMenu.classList.toggle('navbar-slide-down');
});

btnNavRemove.addEventListener("click", function(){
    toggledNavMenu.classList.remove('navbar-slide-down');
    toggledNavMenu.classList.toggle('navbar-slide-up');
})
// =========================================================================
// format price
// =========================================================================
housePrice = document.querySelector('.price');

function formatPrice(priceElement) {
    let priceText = priceElement.textContent.trim();
    let priceValue = parseFloat(priceText.replace(/[^\d.,]/g, '').replace(',', '.')); // Filter non-numeric characters and convert comma to dot
    let formattedPrice = priceValue.toLocaleString('nl-NL', { style: 'currency', currency: 'EUR' });
    priceElement.textContent = formattedPrice;
}

formatPrice(housePrice);