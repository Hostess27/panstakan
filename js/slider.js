document.addEventListener("DOMContentLoaded", function () {
    try {
        var sliders = ['kostet', 'popular', 'best', 'new', 'special'];

        var slidersData = sliders.map(function (sliderClass) {
            return {
                class: sliderClass,
                itemsPerSlide: getItemsPerSlide(sliderClass),
                slides: document.querySelectorAll('.' + sliderClass + '__li'),
                slidesGroups: []
            };
        });

        function initializeSlider(sliderData) {
            try {
                for (var i = 0; i < sliderData.slides.length; i += sliderData.itemsPerSlide) {
                    sliderData.slidesGroups.push(Array.prototype.slice.call(sliderData.slides, i, i + sliderData.itemsPerSlide));
                }

                var currentSlide = 0;

                function showSlide(index) {
                    var list = document.querySelector('.' + sliderData.class + '__list');
                    var opacity = 0;
                    var interval = setInterval(function () {
                        opacity += 0.1;
                        list.style.opacity = opacity;

                        if (opacity >= 1) {
                            clearInterval(interval);
                            list.style.opacity = 1;

                            sliderData.slidesGroups.forEach(function (group, i) {
                                group.forEach(function (slide, j) {
                                    slide.style.display = i === index ? 'block' : 'none';
                                    loadImages(slide);
                                });
                            });
                        }
                    }, 50);
                }

                function loadImages(slide) {
                    var images = slide.querySelectorAll('[data-src]');
                    images.forEach(function (img) {
                        img.setAttribute('src', img.getAttribute('data-src'));
                    });
                }

                function nextSlide() {
                    currentSlide = (currentSlide + 1) % sliderData.slidesGroups.length;
                    showSlide(currentSlide);
                }

                function prevSlide() {
                    currentSlide = (currentSlide - 1 + sliderData.slidesGroups.length) % sliderData.slidesGroups.length;
                    showSlide(currentSlide);
                }

                showSlide(currentSlide);

                document.querySelector('.' + sliderData.class + '__svg[src="./pictures/svg/arrow-left.svg"]').addEventListener('click', prevSlide);
                document.querySelector('.' + sliderData.class + '__svg[src="./pictures/svg/arrow-right.svg"]').addEventListener('click', nextSlide);
            } catch (error) {
                console.error("An unexpected error occurred in initializeSlider function:", error);
            }
        }

        function getItemsPerSlide(sliderClass) {
            try {
                if (window.innerWidth < 768) {
                    return 2;  // мобильные
                } else if (window.innerWidth < 1024) { //планшет
                    switch (sliderClass) {
                        case 'popular':
                            return 3;
                        case 'kostet':
                        case 'best':
                        case 'special':
                            return 2;
                        case 'new':
                            return 4;
                        default:
                            return 2;  // Значение по умолчанию для неизвестных слайдеров
                    }
                } else {  // компьютер
                    switch (sliderClass) {
                        case 'popular':
                            return 9;
                        case 'kostet':
                        case 'best':
                            return 2;
                        case 'new':
                            return 4;
                        case 'special':
                            return 4;
                        default:
                            return 2;  // Значение по умолчанию для неизвестных слайдеров
                    }
                }
            } catch (error) {
                console.error("An unexpected error occurred in getItemsPerSlide function:", error);
            }
        }

        window.addEventListener('resize', function () {
            try {
                slidersData.forEach(function (sliderData) {
                    sliderData.itemsPerSlide = getItemsPerSlide(sliderData.class);
                    sliderData.slidesGroups = [];

                    initializeSlider(sliderData);
                });
            } catch (error) {
                console.error("An unexpected error occurred in resize event:", error);
            }
        });

        slidersData.forEach(function (sliderData) {
            initializeSlider(sliderData);
        });
    } catch (error) {
        console.error("An unexpected error occurred in DOMContentLoaded event:", error);
    }
});
