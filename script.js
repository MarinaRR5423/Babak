const toggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");

toggle?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});
