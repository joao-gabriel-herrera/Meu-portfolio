// Expandir e ocultar menu lateral em celulares
const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () => {
  menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x") &&
      menuMobile.classList.add("bg-danger")
    : menuMobile.classList.replace("bi-x", "bi-list") &&
      menuMobile.classList.remove("bg-danger");
  body.classList.toggle("menu-nav-active");
});
// Fechar menu lateral quando usar os atalhos
const navItem = document.querySelectorAll(".nav-item");
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (body.classList.contains("menu-nav-active")) {
      body.classList.remove("menu-nav-active");
      menuMobile.classList.replace("bi-x", "bi-list") &&
        menuMobile.classList.remove("bg-danger");
    }
  });
});
// Trocar classe active quando clicar em item
let btnContainer = document.getElementById("navbar");
let btns = btnContainer.getElementsByClassName("nav-link");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// Animação dos itens que tiverem o atributo data-anime
const item = document.querySelectorAll("[data-anime]");
const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.9;
  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

window.addEventListener("scroll", () => {
  animeScroll();
});
//  Ativar carregamento no botão de enviar formlário

const btnEnviar = document.querySelector("#btnEnviar");
const btnLoading = document.querySelector("#btnLoading");
const input1 = document.querySelector("#nome");
const input2 = document.querySelector("#email");
const input3 = document.querySelector("#mensagem");

btnEnviar.addEventListener("click", () => {
  if (input1.value && input2.value && input3.value) {
    btnLoading.style.display = "block";
    btnEnviar.style.display = "none";
  }
});

// Tirar o alert após 5 segundos
setTimeout(() => {
  document.querySelector("#alerta").style.display = "none";
}, 5000);

// Ativar Dark mode

const carddark = document.querySelectorAll(".card");
const sectionDark = document.querySelectorAll(".section-bg");

function darkmode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
  sectionBgDark();
  cardDark();
}
function cardDark() {
  const cardExample = document.querySelector("#cardtest");
  cardExample.classList.contains("card-dark")
    ? carddark.forEach((element) => {
        element.classList.remove("card-dark");
      })
    : carddark.forEach((element) => {
        element.classList.add("card-dark");
      });
}

function sectionBgDark() {
  const sectionExample = document.querySelector("#competencias");
  sectionExample.classList.contains("section-bg")
    ? sectionDark.forEach((element) => {
        element.classList.replace("section-bg", "section-bg-dark");
      })
    : sectionDark.forEach((element) => {
        element.classList.replace("section-bg-dark", "section-bg");
      });
}
