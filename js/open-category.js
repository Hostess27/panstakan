let moreCateg = document.getElementsByClassName("category__toggle");

for (let i = 0; i < moreCateg.length; i++) {
    moreCateg[i].addEventListener("click", function (event) {
        event.stopPropagation(); // Остановить всплытие события, чтобы избежать срабатывания слушателя на документе

        let showPerClick = 3;

        let hidden = this.parentNode.querySelectorAll(".category-img.hidden");
        for (let i = 0; i < showPerClick; i++) {
            if (!hidden[i]) return (this.outerHTML = "");

            hidden[i].classList.add("box");
            hidden[i].classList.remove("hidden");
        }
    });
}

// Добавим слушатель события на весь документ
document.addEventListener("click", function (event) {
    // Если клик был вне области категорий, сбросим все изменения
    let categoryHome = document.querySelector(".category");
    if (!categoryHome.contains(event.target)) {
        resetCategories();
    }
});

// Функция для сброса изменений
function resetCategories() {
    let hiddenCategories = document.querySelectorAll(".category-img.box");
    for (let i = 0; i < hiddenCategories.length; i++) {
        hiddenCategories[i].classList.remove("box");
        hiddenCategories[i].classList.add("hidden");
    }
}
// Прокрутка кнопки
document
    .querySelector(".category__toggle")
    .addEventListener("click", function () {
        this.classList.toggle("clicked");
    });


document.querySelector(".category").addEventListener("click", function () {
    this.classList.toggle("clicked");
});


//БОЛЬШЕ ТОВАРОВ

function toggleItems() {
    const itemsToToggle = document.querySelectorAll('.sale__list_togle.hidden');

  
    for (let i = 0; i < 3 && i < itemsToToggle.length; i++) {
        itemsToToggle[i].classList.remove('hidden');
    }

   
    const remainingItems = document.querySelectorAll('.sale__list_togle.hidden');
    if (remainingItems.length === 0) {
    
        document.querySelector('.items__toggle').style.display = 'none';
    }
}