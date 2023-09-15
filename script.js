window.sr = ScrollReveal({ reset: true });
sr.reveal("#SecApresentacao", { duration: 2000 });
// sr.reveal("#SecSobreMim", { duration: 2000 });
// sr.reveal("#SecHabilidadesExperiencias", { duration: 2000 });

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.scrollY + window.innerHeight * 0.85;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

animeScroll();

window.addEventListener("scroll", () => {
  animeScroll();
});
