let imgSlide = document.querySelector(".slider-image");
let translate = 0;

setInterval(() => {
    if(translate >= 0 && translate < 400){
        translate+=100;
    }else{
        translate = 0;
    }
    imgSlide.style.transition = "3s";
    imgSlide.style.transform = `translateX(${-translate}%)`
}, 3000);

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex+=n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex=n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     // let dots = document.getElementsByClassName("dot");
//     if(n > slides.length){slideIndex = 1}
//     if(n < 1){slideIndex = slides.length}
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     // for (let i = 0; i < dots.length; i++) {
//     //     dots[i].className = dots[i].className.replace("active", "");
//     // }
//     slides[slideIndex-1].style.display = "block";
//     // dots[slideIndex-1].className += "active";
// }