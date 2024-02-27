const menubtn = document.querySelector("#btn-menu")
const slidebar = document.querySelector("#slidebar")

menubtn.addEventListener("click", () => {
    slidebar.style.display = "flex"
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        dynanmicBullets:true,
        clickable: true,
    },
    autoplay: {
        delay : 5000,
        clickable:true
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});