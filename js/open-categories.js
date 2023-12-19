document.addEventListener('DOMContentLoaded', function () {
  try {
      let more = document.getElementsByClassName('categories-home__toggle');

      for (let i = 0; i < more.length; i++) {
          try {
              more[i].addEventListener('click', function (event) {
                  try {
                      event.stopPropagation(); // Остановить всплытие события, чтобы избежать срабатывания слушателя на документе

                      let showPerClick = 3;

                      let hidden = this.parentNode.querySelectorAll('.categories-home-img.hidden');
                      for (let i = 0; i < showPerClick; i++) {
                          try {
                              if (!hidden[i]) return this.outerHTML = "";

                              hidden[i].classList.add('box');
                              hidden[i].classList.remove('hidden');
                          } catch (error) {
                              console.error("An unexpected error occurred in loop iteration:", error);
                          }
                      }
                  } catch (error) {
                      console.error("An unexpected error occurred in click event:", error);
                  }
              });
          } catch (error) {
              console.error("An unexpected error occurred in more click event listener:", error);
          }
      }

      // Добавим слушатель события на весь документ
      document.addEventListener('click', function (event) {
          try {
              // Если клик был вне области категорий, сбросим все изменения
              let categoriesHome = document.querySelector('.categories-home');
              if (!categoriesHome.contains(event.target)) {
                  resetCategories();
              }
          } catch (error) {
              console.error("An unexpected error occurred in document click event:", error);
          }
      });

      // Функция для сброса изменений
      function resetCategories() {
          try {
              let hiddenCategories = document.querySelectorAll('.categories-home-img.box');
              for (let i = 0; i < hiddenCategories.length; i++) {
                  hiddenCategories[i].classList.remove('box');
                  hiddenCategories[i].classList.add('hidden');
              }
          } catch (error) {
              console.error("An unexpected error occurred in resetCategories function:", error);
          }
      }

      // Прокрутка кнопки
      document.querySelector('.categories-home__toggle').addEventListener('click', function () {
          try {
              this.classList.toggle('clicked');
          } catch (error) {
              console.error("An unexpected error occurred in categories-home__toggle click event:", error);
          }
      });
  } catch (error) {
      console.error("An unexpected error occurred in DOMContentLoaded event:", error);
  }
});
