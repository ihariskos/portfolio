document.querySelector('.header__btn-theme').addEventListener('click', function () {
    let navItems = document.querySelectorAll('.navigation__item');
    navItems.forEach((el) => {
        el.classList.toggle('dark-theme');
    });

    document.body.classList.toggle('dark-theme');
    document.querySelector('.header__btn-theme').classList.toggle('dark-theme');
    document.querySelector('.navigation__button').classList.toggle('dark-theme');
    
    document.getElementById('nav-project').classList.toggle('dark-theme');
    // document.getElementById('nav-project').style.borderBottom = 'solid 2px white';
    document.getElementById('nav-about').classList.toggle('dark-theme');
    document.querySelector('.navigation__icon').classList.toggle('dark-theme');
});