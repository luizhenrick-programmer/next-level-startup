const MenuMobile = document.getElementById('menu-burguer')

function clickMenu() {
    let MenuBarMobile = document.querySelector('.mobile-menu');
    if (MenuBarMobile.classList.contains('open')) {
        MenuBarMobile.classList.remove('open')
    } else {
        MenuBarMobile.classList.add('open')
    }
}

MenuMobile.addEventListener('click', clickMenu)
