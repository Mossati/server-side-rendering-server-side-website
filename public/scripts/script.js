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