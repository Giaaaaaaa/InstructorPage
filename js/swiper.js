// 小滚动图
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    // 预览照片的数量
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    // 增加自动播放功能
    // 让当前的小滚动图保持原来的位置不动
    centeredSlides: false,
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    //   },
});
// 大滚动图
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
    // 增加自动播放功能
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
});