const opportunities = document.querySelectorAll(".opportunity");

opportunities.forEach((opportunity) => {
  const toggle = opportunity.querySelector(".opportunity-toggle");

  toggle.addEventListener("click", () => {
    const isOpen = opportunity.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});
