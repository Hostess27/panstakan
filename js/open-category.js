document.addEventListener("DOMContentLoaded", function () {
    try {
        let moreCateg = document.getElementsByClassName("category__toggle");

        for (let i = 0; i < moreCateg.length; i++) {
            try {
                moreCateg[i].addEventListener("click", function (event) {
                    try {
                        event.stopPropagation(); // Остановить всплытие события, чтобы избежать срабатывания слушателя на документе

                        let showPerClick = 3;

                        let hidden = this.parentNode.querySelectorAll(".category-img.hidden");
                        for (let i = 0; i < showPerClick; i++) {
                            if (!hidden[i]) return (this.outerHTML = "");

                            hidden[i].classList.add("box");
                            hidden[i].classList.remove("hidden");
                        }
                    } catch (error) {
                        console.error("An unexpected error occurred in moreCateg click event:", error);
                    }
                });
            } catch (error) {
                console.error("An unexpected error occurred in moreCateg click event listener:", error);
            }
        }

        // Добавим слушатель события на весь документ
        document.addEventListener("click", function (event) {
            try {
                // Если клик был вне области категорий, сбросим все изменения
                let categoryHome = document.querySelector(".category");
                if (!categoryHome.contains(event.target)) {
                    resetCategories();
                }
            } catch (error) {
                console.error("An unexpected error occurred in document click event:", error);
            }
        });

        // Функция для сброса изменений
        function resetCategories() {
            try {
                let hiddenCategories = document.querySelectorAll(".category-img.box");
                for (let i = 0; i < hiddenCategories.length; i++) {
                    hiddenCategories[i].classList.remove("box");
                    hiddenCategories[i].classList.add("hidden");
                }
            } catch (error) {
                console.error("An unexpected error occurred in resetCategories function:", error);
            }
        }

        // Прокрутка кнопки
        document.querySelector(".category__toggle").addEventListener("click", function () {
            try {
                this.classList.toggle("clicked");
            } catch (error) {
                console.error("An unexpected error occurred in category__toggle click event:", error);
            }
        });

        document.querySelector(".category").addEventListener("click", function () {
            try {
                this.classList.toggle("clicked");
            } catch (error) {
                console.error("An unexpected error occurred in category click event:", error);
            }
        });

        // БОЛЬШЕ ТОВАРОВ
        function toggleItems() {
            try {
                const itemsToToggle = document.querySelectorAll('.sale__list_togle.hidden');

                for (let i = 0; i < 3 && i < itemsToToggle.length; i++) {
                    itemsToToggle[i].classList.remove('hidden');
                }

                const remainingItems = document.querySelectorAll('.sale__list_togle.hidden');
                if (remainingItems.length === 0) {
                    document.querySelector('.items__toggle').style.display = 'none';
                }
            } catch (error) {
                console.error("An unexpected error occurred in toggleItems function:", error);
            }
        }
    } catch (error) {
        console.error("An unexpected error occurred in DOMContentLoaded event:", error);
    }
});
