const toggle = document.querySelector(".botao-menu");
const navLinks = document.querySelector(".barra-navegacao-itens");
const linksMenu = document.querySelectorAll(".barra-navegacao-itens li a");

//clique do botao
toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

//menu fecha sozinho
linksMenu.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});
