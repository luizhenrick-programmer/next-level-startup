var menuButton = document.getElementById('menu-burguer');
var menuBarMobile = document.querySelector('.nav-list');
var menuBarMobileUL = document.querySelector('.nav-list-ul');

function MenuShow() {
  if (menuButton.classList.contains('show')) {
    menuButton.classList.remove('show');
    menuButton.innerText = 'menu';
    menuBarMobile.style.display = 'none';
    menuBarMobileUL.classList.remove('animation');
    
  } else {
    menuButton.classList.add('show')
    menuButton.innerText = 'cancel';
    menuBarMobile.style.display = 'block';
    menuBarMobileUL.classList.add('animation');
  }
}

menuButton.addEventListener('click', MenuShow)