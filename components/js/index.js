// /slide to view web page
  const slideEml = document.getElementById("slide");
  let slideIndex = 0;

  const images = [
    {
      id: 1,
      img: "https://static.swhosting.com/blog/wp-content/uploads/2024/02/12341_destacada_en.webp"
    },
    {
      id: 2,
      img: "https://www.giet.edu/wp-content/uploads/2021/09/blog-28-scaled.jpg"
    },
    {
      id: 3,
      img: "https://australiancybersecuritymagazine.com.au/wp-content/uploads/2017/08/Hacking-your-own-1.jpg"
    },
    {
      id: 4,
      img: "https://www.fraud.com/wp-content/uploads/2023/04/Hacking-1-1024x535.jpg"
    }
  ];

  function showSlides(index) {
    // Start fade-out
    slideEml.classList.remove("opacity-100");
    slideEml.classList.add("opacity-0");

    setTimeout(() => {
      slideEml.src = images[index].img;

      // After image loads, fade back in
      slideEml.onload = () => {
        slideEml.classList.remove("opacity-0");
        slideEml.classList.add("opacity-100");
      };
    }, 300); // Wait for fade-out before changing image
  }

  // Show the first image
  showSlides(slideIndex);

  // Auto-slide every 3 seconds
  setInterval(() => {
    slideIndex = (slideIndex + 1) % images.length;
    showSlides(slideIndex);
  }, 5000);

  // slide bar in page destiantion
  const swiper = new Swiper(".mySwiper", {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto', // important for fixed width slides
  spaceBetween: 20,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
