// Navbar Atas (Arrow)
function toggleDropdown(id, button) {
  const dropdown = document.getElementById(id);
  const arrow = button.querySelector('.arrow svg');

  document.querySelectorAll('.dropdown-content').forEach(d => {
    if (d !== dropdown) d.classList.add('hidden');
  });

  document.querySelectorAll('.arrow svg').forEach(svg => {
    if (svg !== arrow) svg.classList.remove('rotate-180');
  });

  const isHidden = dropdown.classList.contains('hidden');
  dropdown.classList.toggle('hidden', !isHidden);
  arrow.classList.toggle('rotate-180', isHidden);
}

document.addEventListener('click', function (e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content').forEach(d => d.classList.add('hidden'));
    document.querySelectorAll('.arrow svg').forEach(svg => svg.classList.remove('rotate-180'));
  }
});

// Arrow Closed
document.addEventListener('click', function (e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content').forEach(d => d.classList.add('hidden'));
    document.querySelectorAll('.arrow svg').forEach(a => a.classList.remove('rotate-180'));
  }
});

// Side-Bar & MB
function openMenu() {
  document.querySelector('.side-menu').style.right = '0';
  document.body.classList.add('no-scroll');
}

function closeMenu() {
  document.querySelector('.side-menu').style.right = '-300px';
  document.body.classList.remove('no-scroll');
}

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerButton = document.getElementById('hamburgerButton');
  const sideMenu = document.getElementById('sideMenu');
  const topBarLogo = document.getElementById('topBarLogo');
  const sideBarLogo = document.getElementById('sideBarLogo');
  const topNav = document.getElementById('navbar');
  const overlay = document.getElementById('overlay');

  function closeSideMenu() {
    sideMenu.classList.remove('open');
    overlay?.classList.add('hidden');
  }

  function toggleMenu() {
    const isOpen = sideMenu.classList.toggle('open');
    if (overlay) {
      overlay.classList.toggle('hidden', !isOpen);
    }
    if (isOpen) {
      closeAllDropdowns();
    }
  }

  function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
      dropdown.classList.add('hidden');
    });
  }

  hamburgerButton.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  topBarLogo?.addEventListener('click', closeSideMenu);
  sideBarLogo?.addEventListener('click', closeSideMenu);

  topNav?.addEventListener('click', closeSideMenu);

  overlay?.addEventListener('click', closeSideMenu);
});

// Sidebar Mobile
function toggleMobileDropdown(contentId, arrowId) {
  const content = document.getElementById(contentId);
  const arrow = document.getElementById(arrowId);

  if (content.style.maxHeight && content.style.maxHeight !== "0px") {
    content.style.maxHeight = "0px"; // tutup
  } else {
    content.style.maxHeight = content.scrollHeight + "px"; // buka sesuai tinggi asli
  }

  arrow.classList.toggle("rotate-180");
}

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

// FAQ Features
document.querySelectorAll('.faq-btn').forEach(btn => 
  { 
    btn.addEventListener('click', () => { 
      const content = btn.nextElementSibling; const icon = btn.querySelector('svg'); content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px'; icon.classList.toggle('rotate-180'); 
    }); 
  }); 

// Overlay & Navbar Arrow
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const dropdowns = document.querySelectorAll(".dropdown-content");
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll ke bawah → sembunyikan semua dropdown
    dropdowns.forEach(dropdown => {
      if (!dropdown.classList.contains("hidden")) {
        dropdown.classList.add("hidden");

        // Balikkan ikon panah
        const arrow = dropdown.parentElement.querySelector('.dropdown-toggle .arrow svg');
        arrow?.classList.remove("rotate-180");
      }
    });
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

function openSidebar() {
document.getElementById("sideMenu").classList.remove("hidden");
document.getElementById("overlay").classList.remove("hidden");
document.body.classList.add("overflow-hidden");
}

function closeSidebar() {
document.getElementById("sideMenu").classList.add("hidden");
document.getElementById("overlay").classList.add("hidden");
document.body.classList.remove("overflow-hidden");
}

document.getElementById('overlay').addEventListener('click', closeSidebar);

document.querySelector('.btn-close').addEventListener('click', closeSidebar);

function closeSidebar() {
document.getElementById('sideMenu').classList.remove('open');
document.getElementById('overlay').classList.add('hidden');
}

// Hero Section Effect
const images = [
  "IMG/Background 3.jpg",
  "IMG/Background 4.jpg",
  "IMG/Background 7.jpg",
  "IMG/Background 6.jpg"
];

let current = 0;
let next = 1;

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

setInterval(() => {
  // Active - Next
  const activeImg = current % 2 === 0 ? img1 : img2;
  const nextImg = current % 2 === 0 ? img2 : img1;

  nextImg.src = images[next];

  // Fade effect
  activeImg.classList.remove("opacity-100");
  activeImg.classList.add("opacity-0");

  nextImg.classList.remove("opacity-0");
  nextImg.classList.add("opacity-100");

  current = next;
  next = (next + 1) % images.length;
}, 5000);

// Navbar Scroll
let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  lastScrollY = window.scrollY;
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
// const video = document.getElementById("bgVideo");
// video.addEventListener("click", () => {
//   if (video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }
// });

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

// Card Animation IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-10");
          obs.unobserve(entry.target); // stop observe setelah animasi
        }
      });
    },
    {
      threshold: 0.4, // muncul saat 20% card masuk layar
    }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});