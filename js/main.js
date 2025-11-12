document.addEventListener("DOMContentLoaded", function() {
    let swiperInstance;
    const swiperContainer = document.querySelector(".mySwiper");

    if (!swiperContainer) return; // Безпечна перевірка

    function initSwiper() {
        if (window.innerWidth > 1199 && !swiperInstance) {
            swiperInstance = new Swiper(".mySwiper", {
                direction: "vertical",
                slidesPerView: 1,
                spaceBetween: 30,
                mousewheel: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        } 
        else if (window.innerWidth <= 1199 && swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = undefined;
        }
    }

    initSwiper();
    window.addEventListener('resize', initSwiper);
});
