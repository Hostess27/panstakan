document.addEventListener('DOMContentLoaded', function () {
    try {
        const pictures = document.querySelectorAll('.hero__container picture');
        const coffeFull = document.querySelector('.hero__coffe.full');
        const coffeEmpty = document.querySelector('.hero__coffe.empty');
        const coffeEmptySecond = document.querySelector('.hero__coffe.empty-second');
        const arrowLeft = document.querySelector('.arrow-left');
        const arrowRight = document.querySelector('.arrow-right');
        let currentIndex = 0;

        function showSlide(index) {
            try {
                pictures.forEach((picture, i) => {
                    if (i === index) {
                        fadeIn(picture);
                    } else {
                        fadeOut(picture);
                    }
                });

                updateCoffeImages();
              
            } catch (error) {
                console.error("An unexpected error occurred in showSlide function:", error);
            }
        }

        function fadeIn(element) {
            try {
                element.style.display = 'block';
                element.style.opacity = 0;

                (function fade() {
                    if ((element.style.opacity = parseFloat(element.style.opacity) + 0.02) < 1) {
                        requestAnimationFrame(fade);
                    }
                })();
            } catch (error) {
                console.error("An unexpected error occurred in fadeIn function:", error);
            }
        }

        function fadeOut(element) {
            try {
                element.style.opacity = 0;
                element.style.display = 'none';
            } catch (error) {
                console.error("An unexpected error occurred in fadeOut function:", error);
            }
        }

        function updateCoffeImages() {
            try {
                if (currentIndex % 3 === 0) {
                    coffeFull.src = "./pictures/svg/coffe-full.svg";
                    coffeEmpty.src = "./pictures/svg/coffe-empty.svg";
                    coffeEmptySecond.src = "./pictures/svg/coffe-empty.svg";
                } else if (currentIndex % 3 === 1) {
                    coffeFull.src = "./pictures/svg/coffe-empty.svg";
                    coffeEmpty.src = "./pictures/svg/coffe-full.svg";
                    coffeEmptySecond.src = "./pictures/svg/coffe-empty.svg";
                } else {
                    coffeFull.src = "./pictures/svg/coffe-empty.svg";
                    coffeEmpty.src = "./pictures/svg/coffe-empty.svg";
                    coffeEmptySecond.src = "./pictures/svg/coffe-full.svg";
                }
            } 
            catch (error) {
                console.error("An unexpected error occurred in updateCoffeImages function:", error);
            }
        }

        

        function navigate(direction) {
            try {
                if (direction === 'left') {
                    currentIndex = (currentIndex - 1 + pictures.length) % pictures.length;
                } else {
                    currentIndex = (currentIndex + 1) % pictures.length;
                }

                showSlide(currentIndex);
            } catch (error) {
                console.error("An unexpected error occurred in navigate function:", error);
            }
        }

        // Показываем первый слайд при загрузке страницы
        showSlide(currentIndex);

        arrowLeft.addEventListener('click', function () {
            navigate('left');
        });

        arrowRight.addEventListener('click', function () {
            navigate('right');
        });
    } catch (error) {
        console.error("An unexpected error occurred in DOMContentLoaded event:", error);
    }
});
