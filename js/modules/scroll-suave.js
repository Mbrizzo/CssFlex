export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave" a[href^="#"]');
}

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  console.log(href);
}

linksInternos.array.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});

