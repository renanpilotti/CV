function updateSwiper() {
  let num = 0;
  window.innerWidth > 800 ? num = 3 : num = 1;
  var swiper = new Swiper(".swiper-desktop", {
    slidesPerView: num,
    slidesPerGroup: num,
    spaceBetween: 30,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

updateSwiper()
AOS.init();

window.onresize = () => updateSwiper();