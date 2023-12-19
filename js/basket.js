// document.addEventListener("DOMContentLoaded", function () {
//     // Получаем ссылку на корзину и счетчик
//     const basketLink = document.querySelector('.header__basket a');
//     const basketCounter = document.querySelector('.basket-counter');

//     // Имитация данных о количестве товаров в корзине (можете заменить на реальные данные)
//     let itemCount = 0;

//     // Обновляем счетчик при загрузке страницы
//     updateBasketCounter();

//     // Функция для обновления счетчика
//     function updateBasketCounter() {
//         basketCounter.textContent = itemCount === 0 ? '+' : itemCount;
//     }

//     // Можно вызывать эту функцию, когда пользователь добавляет товар в корзину
//     function addItemToBasket() {
//         itemCount++;
//         updateBasketCounter();
//     }

//     // Пример вызова функции при клике на корзину (вы можете использовать свою логику)
//     basketLink.addEventListener('click', function (event) {
//         event.preventDefault();
//         // Здесь может быть логика перехода на страницу корзины
//     });
// });