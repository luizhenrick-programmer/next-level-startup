const MenuMobile = document.getElementById('menu-hamburguer')

function clickMenu() {
    const header = document.getElementById('cabecalho')
    header.classList.toggle('active')
}

MenuMobile.addEventListener('click', clickMenu)
