window.addEventListener("load", function () {
    document
        .querySelector(".filter")
        .addEventListener("click", function (event) {
            try {
                if (
                    event.target.classList.contains("filter__head") ||
                    event.target.classList.contains("filter__head_svg")
                ) {
                    this.classList.toggle("clicked");

                    if (this.classList.contains("clicked")) {
                        initializeSliders();
                    }
                }
            } catch (error) {
                console.error("An unexpected error occurred in filter click:", error);
            }
        });
});

function initializeSliders() {
    try {
        var minPrice = 1;
        var maxPrice = 1000;

        var minPriceInput = document.getElementById("min-price");
        var maxPriceInput = document.getElementById("max-price");
        var sliderHandleMin = document.getElementById("slider-handle-min");
        var sliderHandleMax = document.getElementById("slider-handle-max");
        var rangeSlider = document.getElementById("range-slider");

        // Устанавливаем начальные значения для полей ввода
        minPriceInput.value = minPrice;
        maxPriceInput.value = maxPrice;

        // Устанавливаем начальное положение ползунков
        var sliderWidth = rangeSlider.offsetWidth - sliderHandleMin.offsetWidth;
        var range = maxPrice - minPrice;

        sliderHandleMin.style.left = "0px"; // начальное положение для минимального значения
        sliderHandleMax.style.left = sliderWidth + "px"; // начальное положение для максимального значения

        // Функция для обновления значений полей ввода при перемещении ползунков
        function updateValues() {
            var handlePositionMin =
                parseFloat(sliderHandleMin.style.left) / sliderWidth;
            var handlePositionMax =
                parseFloat(sliderHandleMax.style.left) / sliderWidth;
            var minValue = Math.round(minPrice + range * handlePositionMin);
            var maxValue = Math.round(minPrice + range * handlePositionMax);
            minPriceInput.value = minValue;
            maxPriceInput.value = maxValue;
        }

        // Обработка перемещения ползунков
        sliderHandleMin.addEventListener("mousedown", function (event) {
            event.preventDefault();
            document.addEventListener("mousemove", handleMoveMin);
            document.addEventListener("mouseup", function () {
                document.removeEventListener("mousemove", handleMoveMin);
            });
        });

        sliderHandleMax.addEventListener("mousedown", function (event) {
            event.preventDefault();
            document.addEventListener("mousemove", handleMoveMax);
            document.addEventListener("mouseup", function () {
                document.removeEventListener("mousemove", handleMoveMax);
            });
        });

        function handleMoveMin(event) {
            try {
                var newPosition =
                    event.clientX -
                    rangeSlider.getBoundingClientRect().left -
                    sliderHandleMin.offsetWidth / 2;
                if (
                    newPosition >= 0 &&
                    newPosition <=
                        parseFloat(sliderHandleMax.style.left) -
                            sliderHandleMin.offsetWidth
                ) {
                    sliderHandleMin.style.left = newPosition + "px";
                    updateValues();
                }
            } catch (error) {
                console.error("An unexpected error occurred in handleMoveMin:", error);
            }
        }

        function handleMoveMax(event) {
            try {
                var newPosition =
                    event.clientX -
                    rangeSlider.getBoundingClientRect().left -
                    sliderHandleMax.offsetWidth / 2;
                if (
                    newPosition <= sliderWidth &&
                    newPosition >=
                        parseFloat(sliderHandleMin.style.left) +
                            sliderHandleMax.offsetWidth
                ) {
                    sliderHandleMax.style.left = newPosition + "px";
                    updateValues();
                }
            } catch (error) {
                console.error("An unexpected error occurred in handleMoveMax:", error);
            }
        }

        // Обработка изменений в полях ввода
        minPriceInput.addEventListener("change", function () {
            try {
                var value = parseInt(this.value);
                if (!isNaN(value) && value >= minPrice && value <= maxPrice) {
                    var handlePosition = (value - minPrice) / range;
                    sliderHandleMin.style.left = handlePosition * sliderWidth + "px";
                    updateValues();
                }
            } catch (error) {
                console.error("An unexpected error occurred in minPriceInput change:", error);
            }
        });

        maxPriceInput.addEventListener("change", function () {
            try {
                var value = parseInt(this.value);
                if (!isNaN(value) && value >= minPrice && value <= maxPrice) {
                    var handlePosition = (value - minPrice) / range;
                    sliderHandleMax.style.left = handlePosition * sliderWidth + "px";
                    updateValues();
                }
            } catch (error) {
                console.error("An unexpected error occurred in maxPriceInput change:", error);
            }
        });

        // Обработка изменений размеров окна
        window.addEventListener("resize", function () {
            try {
                sliderWidth = rangeSlider.offsetWidth - sliderHandleMin.offsetWidth;
                updateValues();
            } catch (error) {
                console.error("An unexpected error occurred in window resize:", error);
            }
        });

    } catch (error) {
        console.error("An unexpected error occurred in initializeSliders:", error);
    }
}

initializeSliders();
