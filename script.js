// CURSOR GLOW
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

/* run on scroll */
window.addEventListener("scroll", revealOnScroll);

/* run once on load */
window.addEventListener("load", revealOnScroll);

const skillSection = document.querySelector(".skill");
const skillFills = document.querySelectorAll(".skill-fill");

function animateSkills() {
  skillFills.forEach((fill) => {
    const top = fill.getBoundingClientRect().top;

    if (top < window.innerHeight - 50 && !fill.classList.contains("done")) {
      fill.style.width = fill.getAttribute("data-width");
      fill.classList.add("done"); // prevent re-trigger
    }
  });
}

/* run on scroll */
window.addEventListener("scroll", animateSkills);

/* run on load */
window.addEventListener("load", animateSkills);

const name = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  /* NAME SHRINK + MOVE */
  let scale = Math.max(0.7, 1 - scrollY / 1200);
  let translateY = Math.min(120, scrollY / 4);

  name.style.transform = `translateY(-${translateY}px) scale(${scale})`;

  /* CARDS REVEAL */
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

function openImage(image) {
    const modal = document.getElementById("imageModal");
    const enlargedImage = document.getElementById("enlargedImage");

    enlargedImage.src = image.src;
    enlargedImage.alt = image.alt;

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
}

function closeImage(event) {
    if (event) {
        event.stopPropagation();
    }

    const modal = document.getElementById("imageModal");

    modal.style.display = "none";

    document.body.style.overflow = "auto";
}