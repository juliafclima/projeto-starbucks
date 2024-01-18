let imgCopo = document.querySelector(".copo-grande");
let copoVerde = document.querySelector(".verde");
let copoRosaClaro = document.querySelector(".rosa-claro");
let copoRosa = document.querySelector(".rosa");
let copoMarrom = document.querySelector(".marrom");
let copoVermelho = document.querySelector(".vermelho");
let copoBege = document.querySelector(".bege");
let copoLaranja = document.querySelector(".laranja");
let copoAzul = document.querySelector(".azul");
let circulo = document.querySelector(".circulo");

copoVerde.addEventListener("click", () => {
  imgCopo.src = "../images/img1.png";
  circulo.style.backgroundColor = "#017143";
});

copoRosaClaro.addEventListener("click", () => {
  imgCopo.src = "../images/img2.png";
  circulo.style.backgroundColor = "#eb7495";
});

copoRosa.addEventListener("click", () => {
  imgCopo.src = "../images/img3.png";
  circulo.style.backgroundColor = "#d752b1";
});

copoMarrom.addEventListener("click", () => {
  imgCopo.src = "../images/img4.png";
  circulo.style.backgroundColor = "#4D3535";
});

copoVermelho.addEventListener("click", () => {
  imgCopo.src = "../images/img5.png";
  circulo.style.backgroundColor = "#A20705";
});

copoBege.addEventListener("click", () => {
  imgCopo.src = "../images/img6.png";
  circulo.style.backgroundColor = "#9C754E";
});

copoLaranja.addEventListener("click", () => {
  imgCopo.src = "../images/img8.png";
  circulo.style.backgroundColor = "#CB6705";
});

copoAzul.addEventListener("click", () => {
  imgCopo.src = "../images/img9.png";
  circulo.style.backgroundColor = "#BFDFEC";
});

function redirecionar() {
  window.open("https://www.starbucks.com.br/", "_blank");
}
