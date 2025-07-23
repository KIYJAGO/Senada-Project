// Navbar Atas (Arrow)
function toggleDropdown(id, button) {
const dropdown = document.getElementById(id);
const allDropdowns = document.querySelectorAll('.dropdown-content');
const allArrows = document.querySelectorAll('.arrow');

  allDropdowns.forEach(d => {
    if (d !== dropdown) d.style.display = 'none';
  });

  allArrows.forEach(a => {
    if (a !== button.querySelector('.arrow')) a.textContent = '▼';
  });

  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
    button.querySelector('.arrow').textContent = '▼';
  } else {
    dropdown.style.display = 'block';
    button.querySelector('.arrow').textContent = '▲';
  }
}

// Close Dropdwown
document.addEventListener('click', function (e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content').forEach(d => d.style.display = 'none');
    document.querySelectorAll('.arrow').forEach(a => a.textContent = '▼');
  }
});

// Side-Bar & MB
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerButton = document.getElementById('hamburgerButton');
  const sideMenu = document.getElementById('sideMenu');
  const sideBarLogo = document.getElementById('sideBarLogo');
  const topBarLogo = document.getElementById('topBarLogo');

  function toggleMenu() {
    sideMenu.classList.toggle('open');
  }

  hamburgerButton.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  function handleLogoClick(e) {
    if (sideMenu && sideMenu.classList.contains('open')) {
      sideMenu.classList.remove('open');
    }
  }

  topBarLogo?.addEventListener('click', handleLogoClick);
  sideBarLogo?.addEventListener('click', handleLogoClick);
});

// Close Right-Bar
document.addEventListener('click', function(e) {
  if (sideMenu.classList.contains('open') && !sideMenu.contains(e.target) && e.target !== hamburgerButton) {
    sideMenu.classList.remove('open');
  }
});
let toggle = document.getElementById('hamburgerButton');
toggle.addEventListener('click',() => {
    document.documentElement.classList.toggle('dark')
    document.documentElement.classList.contains('dark')? toggle.innerText = "☰" : toggle.innerText = "☰"
})

// Navbar Scroll
let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Scroll ke bawah → sembunyikan navbar
    navbar.style.transform = 'translateY(-100%)';
  } else {

    navbar.style.transform = 'translateY(0)';
  }
  lastScrollY = window.scrollY;
});

// Contact Features
document.querySelectorAll('.faq-btn').forEach(btn => 
  { 
    btn.addEventListener('click', () => { 
      const content = btn.nextElementSibling; const icon = btn.querySelector('svg'); content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px'; icon.classList.toggle('rotate-180'); 
    }); 
  }); 

// Main Content Animation
const reveals = document.querySelectorAll('.reveal');
      
window.addEventListener('scroll', () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add('opacity-100', 'translate-y-0');
      el.classList.remove('opacity-0', 'translate-y-10');
    }
  });
});

// Parallax Effect
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const parallax = document.getElementById("parallax");
  parallax.style.transform = `translateY(${scrollY * 0.3}px)`;
});

// Video 
const video = document.getElementById("bgVideo");
video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

// Contact
document.querySelectorAll('.faq-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('.faq-icon');

    const isOpen = content.classList.contains('faq-open');

   if (isOpen) {
      content.classList.remove('max-h-0');
      content.classList.add('faq-open');
      icon.classList.add('rotate-180');
    }
  });
});

