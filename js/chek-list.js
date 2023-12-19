let select = function () {
    try {
      let selectHeader = document.querySelectorAll('.select__header');
      let selectItem = document.querySelectorAll('.check__forma-option');
  
      selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle);
      });
  
      selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
      });
  
      function selectToggle() {
        try {
          this.parentElement.classList.toggle('is-active');
        } catch (error) {
          console.error('Ошибка при переключении состояния выбора:', error);
          // Дополнительные действия при ошибке, если необходимо
        }
      }
  
      function selectChoose() {
        try {
          let text = this.innerText,
              select = this.closest('.check__forma-label-div'),
              currentText = select.querySelector('.check__forma__current');
          currentText.innerText = text;
          select.classList.remove('is-active');
        } catch (error) {
          console.error('Ошибка при выборе элемента:', error);
          // Дополнительные действия при ошибке, если необходимо
        }
      }
    } catch (error) {
      console.error('Ошибка при выполнении функции select:', error);
      // Дополнительные действия при ошибке, если необходимо
    }
  };
  
  select();
  