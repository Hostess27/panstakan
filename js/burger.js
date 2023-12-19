const burgerIcon = document.getElementById("burger-icon");
const burgerMenu = document.getElementById("burger-menu");
const closeBtn = document.getElementById("close-btn");

let menuIsOpen = false;

burgerIcon.addEventListener("click", function () {
    try {
        if (!menuIsOpen) {
            burgerMenu.style.left = "0";
            menuIsOpen = true;
        } else {
            burgerMenu.style.left = "-100%";
            menuIsOpen = false;
        }
    } catch (error) {
        console.error('Ошибка при обработке клика на иконке бургера:', error);
        // Дополнительные действия при ошибке, если необходимо
    }
});

closeBtn.addEventListener("click", function () {
    try {
        burgerMenu.style.left = "-100%";
        menuIsOpen = false;
    } catch (error) {
        console.error('Ошибка при обработке клика на кнопке закрытия:', error);
        // Дополнительные действия при ошибке, если необходимо
    }
});

window.addEventListener("click", function (event) {
    try {
        if (
            menuIsOpen &&
            event.target !== burgerMenu &&
            event.target !== burgerIcon
        ) {
            burgerMenu.style.left = "-100%";
            menuIsOpen = false;
        }
    } catch (error) {
        console.error('Ошибка при обработке клика за пределами меню:', error);
        // Дополнительные действия при ошибке, если необходимо
    }
});

window.addEventListener("scroll", function () {
    try {
        if (menuIsOpen) {
            burgerMenu.style.left = "-100%";
            menuIsOpen = false;
        }
    } catch (error) {
        console.error('Ошибка при обработке скролла:', error);
        // Дополнительные действия при ошибке, если необходимо
    }
});
