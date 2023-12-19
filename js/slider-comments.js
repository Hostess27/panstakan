document.addEventListener("DOMContentLoaded", function () {
    try {
        let currentIndex = 0;
        const allSlides = document.querySelectorAll('.comment__cart--slider');

        function initializeIndicators(slideIndex) {
            try {
                const indicatorsContainer = allSlides[slideIndex].querySelector('.indicators-container');
                const maxIndicators = Math.min(3, allSlides.length);

                for (let i = 0; i < maxIndicators; i++) {
                    const indicator = document.createElement('span');
                    indicator.classList.add('indicator');
                    indicatorsContainer.appendChild(indicator);
                }

                updateIndicators();
            } catch (error) {
                console.error("An unexpected error occurred in initializeIndicators function:", error);
            }
        }

        function updateIndicators() {
            try {
                const currentIndicatorsContainer = allSlides[currentIndex].querySelector('.indicators-container');
                const indicators = currentIndicatorsContainer.querySelectorAll('.indicator');

                indicators.forEach((indicator, i) => {
                    try {
                        indicator.classList.remove('active');
                        indicator.removeEventListener('click', prevSlide);
                        indicator.removeEventListener('click', nextSlide);

                        // Изменения здесь: листание по кругу
                        const prevIndex = (currentIndex - 1 + allSlides.length) % allSlides.length;
                        const nextIndex = (currentIndex + 1) % allSlides.length;

                        if (i === 0) {
                            indicator.addEventListener('click', () => navigate(prevIndex));
                        } else if (i === 2) {
                            indicator.addEventListener('click', () => navigate(nextIndex));
                        }

                        if ((i === 0 && currentIndex !== 0) || (i === 2 && currentIndex !== allSlides.length - 1)) {
                            indicator.classList.add('active');
                        }
                    } catch (error) {
                        console.error("An unexpected error occurred in indicators forEach loop:", error);
                    }
                });
            } catch (error) {
                console.error("An unexpected error occurred in updateIndicators function:", error);
            }
        }

        function navigate(index) {
            try {
                currentIndex = index;
                updateSlides();
            } catch (error) {
                console.error("An unexpected error occurred in navigate function:", error);
            }
        }

        function prevSlide() {
            try {
                navigate((currentIndex - 1 + allSlides.length) % allSlides.length);
            } catch (error) {
                console.error("An unexpected error occurred in prevSlide function:", error);
            }
        }

        function nextSlide() {
            try {
                navigate((currentIndex + 1) % allSlides.length);
            } catch (error) {
                console.error("An unexpected error occurred in nextSlide function:", error);
            }
        }

        function updateSlides() {
            try {
                allSlides.forEach((slide, i) => {
                    slide.classList.toggle('hidden-slide', i !== currentIndex);
                });

                updateIndicators();
            } catch (error) {
                console.error("An unexpected error occurred in updateSlides function:", error);
            }
        }

        allSlides.forEach((slide, i) => {
            initializeIndicators(i);
        });

        updateSlides();
    } catch (error) {
        console.error("An unexpected error occurred in DOMContentLoaded event:", error);
    }
});
