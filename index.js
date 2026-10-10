// 1. Mobile Menu Toggle
const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");

mobileToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close mobile nav when clicking a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// 2. Interactive Projects Filter
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filterValue = btn.getAttribute("data-filter");

    projectCards.forEach((card) => {
      if (
        filterValue === "all" ||
        card.getAttribute("data-category") === filterValue
      ) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

// 3. Project Detail Modal Window
const projectModal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalLocation = document.getElementById("modalLocation");
const modalScope = document.getElementById("modalScope");
const modalTimeline = document.getElementById("modalTimeline");

function openProjectModal(title, location, scope, timeline, imgSrc) {
  modalTitle.textContent = title;
  modalLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${location}`;
  modalScope.textContent = `Full turnkey structural delivery comprising: ${scope}. Executed with continuous core sample testing and zero lost-time injuries (LTI).`;
  modalTimeline.textContent = timeline;
  modalImg.src = imgSrc;

  projectModal.classList.add("active");
}

function closeProjectModal() {
  projectModal.classList.remove("active");
}

// Close modal on background click
projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) {
    closeProjectModal();
  }
});

// 4. Form Submission Handler with Toast Feedback
function handleFormSubmit(event) {
  event.preventDefault();
  const toast = document.getElementById("toast");

  // Show confirmation toast
  toast.classList.add("show");

  // Reset form
  document.getElementById("rfpForm").reset();

  // Hide toast after 4 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// 5. Scroll Active State Highlighting for Nav
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
