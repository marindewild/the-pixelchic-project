const navButtons = document.querySelectorAll("[data-page]");
const pages = document.querySelectorAll(".page");

function showPage(pageName) {
  pages.forEach(page => page.classList.toggle("active", page.id === `page-${pageName}`));
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.page === pageName);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    const page = button.dataset.page;
    if (page) showPage(page);
  });
});

// // Simple fake visitor counter that persists in the browser.
// const counter = document.getElementById("counter");
// let visits = Number(localStorage.getItem("pinkpixel-visits") || 1337);
// visits += 1;
// localStorage.setItem("pinkpixel-visits", visits);
// counter.textContent = String(visits).padStart(6, "0");

// // Gallery project popup.
// const modal = document.getElementById("modal");
// const modalTitle = document.getElementById("modalTitle");
// const modalDescription = document.getElementById("modalDescription");
// const modalArt = document.getElementById("modalArt");

// document.querySelectorAll(".art-card").forEach(card => {
//   card.addEventListener("click", () => {
//     modalTitle.textContent = card.dataset.title;
//     modalDescription.textContent = card.dataset.description;
//     const sourceArt = card.querySelector(".fake-art").cloneNode(true);
//     sourceArt.style.height = "100%";
//     modalArt.replaceChildren(sourceArt);
//     modal.classList.add("open");
//   });
// });

// document.getElementById("closeModal").addEventListener("click", () => {
//   modal.classList.remove("open");
// });

// modal.addEventListener("click", event => {
//   if (event.target === modal) modal.classList.remove("open");
// });

// document.addEventListener("keydown", event => {
//   if (event.key === "Escape") modal.classList.remove("open");
// });

// // Demo contact form.
// document.getElementById("contactForm").addEventListener("submit", event => {
//   event.preventDefault();
//   document.getElementById("formMessage").textContent =
//     "★ MESSAGE SENT! (demo — koppel hier later je echte formulierdienst aan)";
//   event.target.reset();
// });
