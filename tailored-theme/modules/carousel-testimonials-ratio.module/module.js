const swiperEl = document.querySelector(".jk_module__testimonial-carousel-2");
Object.assign(swiperEl, {
  slidesPerView: 1,
  spaceBetween: 10,
  //autoplay: {
  //	delay: 2500,
  //	disableOnInteraction: true
  // },
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".jk_tc2__next",
    prevEl: ".jk_tc2__prev",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

swiperEl.initialize();

/* Add unique attribute data to modal elements */

const slides = document.querySelectorAll(".jk_tc2__swiper-slide");
slides.forEach((slide, index) => {
  const ariaLabel = slide.getAttribute("aria-label");
  const jkModalID = ariaLabel
    .replace(/\s/g, "")
    .replace("/", "")
    .padStart(4, "0");
  const jkModal = slide.querySelector(".jk_tc2-modal");
  const jkButton = slide.querySelector(".jk_tc2-button");
  jkModal.setAttribute("id", "jk_modal-id-" + jkModalID);
  jkButton.setAttribute("id", "jk_button-id-" + jkModalID);
});
