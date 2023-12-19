document.addEventListener("DOMContentLoaded", function () {
    try {
        // устанавливаем триггер для модального окна (название можно изменить)
        const modalTrigger = document.getElementsByClassName("trigger")[0];

        // получаем ширину отображенного содержимого и толщину ползунка прокрутки
        const windowInnerWidth = document.documentElement.clientWidth;
        const scrollbarWidth = parseInt(window.innerWidth) - parseInt(windowInnerWidth);

        // привязываем необходимые элементы
        const bodyElementHTML = document.getElementsByTagName("body")[0];
        const modalBackground = document.getElementsByClassName("modalBackground")[0];
        const modalClose = document.getElementsByClassName("modalClose")[0];
        const modalActive = document.getElementsByClassName("modalActive")[0];

        // функция для корректировки положения body при появлении ползунка прокрутки
        function bodyMargin() {
            bodyElementHTML.style.marginRight = "-" + scrollbarWidth + "px";
        }

        // при длинной странице - корректируем сразу
        bodyMargin();

        // событие нажатия на триггер открытия модального окна
        modalTrigger.addEventListener("click", function () {
            try {
                // делаем модальное окно видимым
                modalBackground.style.display = "block";

                // если размер экрана больше 1366 пикселей (т.е. на мониторе может появиться ползунок)
                if (windowInnerWidth >= 1366) {
                    bodyMargin();
                }
            } catch (error) {
                console.error("An unexpected error occurred in modalTrigger click:", error);
            }
        });

        // нажатие на крестик закрытия модального окна
        modalClose.addEventListener("click", function () {
            try {
                modalBackground.style.display = "none";
                if (windowInnerWidth >= 1366) {
                    bodyMargin();
                }
            } catch (error) {
                console.error("An unexpected error occurred in modalClose click:", error);
            }
        });

        // закрытие модального окна на зону вне окна, т.е. на фон
        modalBackground.addEventListener("click", function (event) {
            try {
                if (event.target === modalBackground) {
                    modalBackground.style.display = "none";
                    if (windowInnerWidth >= 1366) {
                        bodyMargin();
                    }
                }
            } catch (error) {
                console.error("An unexpected error occurred in modalBackground click:", error);
            }
        });
    } catch (error) {
        console.error("An unexpected error occurred in DOMContentLoaded event:", error);
    }
});
