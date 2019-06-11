const darkTheme = 'dark-theme';

document.querySelector('.header__btn-theme').addEventListener('click', function () {    
    const darkThemeEnabled = [
        document.body.classList.toggle(darkTheme),
        document.querySelector('.header__btn-theme').classList.toggle(darkTheme),
        document.querySelector('.header__logo').classList.toggle(darkTheme),
        document.querySelector('.copylove__link').classList.toggle(darkTheme)
    ];

    localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
});

if (JSON.parse(localStorage.getItem('dark-theme-enabled').split(',')[0])) {
    document.body.classList.add(darkTheme);
    document.querySelector('.header__btn-theme').classList.add(darkTheme);
    document.querySelector('.header__logo').classList.add(darkTheme);
    document.querySelector('.copylove__link').classList.add(darkTheme);
}