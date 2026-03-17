const botao = document.querySelector(".nop");

botao.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  botao.style.position = "absolute";
  botao.style.left = x + "px";
  botao.style.top = y + "px";
});
