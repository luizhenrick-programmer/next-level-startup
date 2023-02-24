const MenuMobile = document.getElementById('menu-burguer')

function clickMenu() {
    const header = document.getElementById('cabecalho')
    header.classList.toggle('active')
}

MenuMobile.addEventListener('click', clickMenu)
