var menuButton = document.getElementById('menu-burguer');
var menuBarMobile = document.querySelector('.nav-list');
var menuBarMobileUL = document.querySelector('.nav-list-ul');
var menuLogoMobile = document.querySelector('.logo')

function MenuShow() {
  if (menuButton.classList.contains('show')) {
    menuButton.classList.remove('show');
    menuButton.innerText = 'menu';
    menuBarMobile.style.display = 'none';
    
  } else {
    menuButton.classList.add('show')
    menuButton.innerText = 'cancel';
    menuBarMobile.style.display = 'block';
    menuLogoMobile.classList.add('menulogo')
  }
}

menuButton.addEventListener('click', MenuShow());