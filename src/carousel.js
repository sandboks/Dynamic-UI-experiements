// DOM manipulation object 
export const Carousel = (function () {

    const totalSlides = 3;
    let currentSlideIndex = 0;

    const ArrowRight = document.getElementById("rightArrow");
    const ArrowLeft = document.getElementById("leftArrow");
    const CarouselImages = document.querySelector(".carouselImages");
    const CarouselDots = document.querySelectorAll(".carouselDot"); // []
    const CarouselWindowCrop = document.querySelector(".carouselWindowCrop");

    let panelWidth = CarouselWindowCrop.offsetWidth;

    
    function AddEventListeners() {
        ArrowRight.addEventListener('click', () => {
            ChangeSlideBy(1);
        });
        ArrowLeft.addEventListener('click', () => {
            ChangeSlideBy(-1);
        });

        SetArrowButtons();
    }

    function ChangeSlideBy(delta) {
        CarouselDots[currentSlideIndex].classList.remove("carouselDotACTIVE");
        currentSlideIndex += delta;
        CarouselImages.style.transform = `translate(-${currentSlideIndex * panelWidth}px, 0px)`;
        CarouselDots[currentSlideIndex].classList.add("carouselDotACTIVE");
        SetArrowButtons();
    }

    function SetArrowButtons() {
        ArrowLeft.style.display = (currentSlideIndex <= 0) ? "none" : "block";
        ArrowRight.style.display = (currentSlideIndex + 1 >= totalSlides) ? "none" : "block";
    }


    return {
        AddEventListeners,
    };
})();
