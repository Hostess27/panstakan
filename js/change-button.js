function changeTextAndColor(button) {
    if (button.classList.contains("card-btn__sale")) {
        if (button.innerHTML === "В корзині") {
            button.innerHTML = "Купити";

            button.classList.remove("clicked");
        } else {
            button.innerHTML = "В корзині";

            button.classList.add("clicked");
        }
    } else {
        console.error("Нажат неожиданный элемент.");
    }
}
