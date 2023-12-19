function removeItem(cartItem) {
  // Удаление элемента из DOM
  try {
    if (cartItem && cartItem.parentNode) {
      cartItem.parentNode.removeChild(cartItem);
    }
  } catch (error) {
    console.error('Ошибка при удалении элемента:', error);
    // Дополнительные действия при ошибке, если необходимо
  }
}

class SimpleCounter {
  constructor(container) {
    this.value = 1;
    this.container = container;
    this.updateDisplay();
  }

  increase() {
    try {
      this.value++;
      this.updateDisplay();
    } catch (error) {
      console.error('Ошибка при увеличении счетчика:', error);
      // Дополнительные действия при ошибке, если необходимо
    }
  }

  decrease() {
    try {
      if (this.value > 1) {
        this.value--;
        this.updateDisplay();
      } else {
        this.removeParent();
      }
    } catch (error) {
      console.error('Ошибка при уменьшении счетчика:', error);
      // Дополнительные действия при ошибке, если необходимо
    }
  }

  reset() {
    try {
      this.value = 1;
      this.updateDisplay();
    } catch (error) {
      console.error('Ошибка при сбросе счетчика:', error);
      // Дополнительные действия при ошибке, если необходимо
    }
  }

  updateDisplay() {
    try {
      this.container.querySelector('.counter-value').innerText = this.value;
    } catch (error) {
      console.error('Ошибка при обновлении отображения счетчика:', error);
      // Дополнительные действия при ошибке, если необходимо
    }
  }

  removeParent() {
    try {
      this.container.remove();
    } catch (error) {
      console.error('Ошибка при удалении родителя:', error);
      // Дополнительные действия при ошибке, если необходимо
    }
  }
}

const counters = [];

function initializeCounters() {
  const counterContainers = document.querySelectorAll('.basket-item');

  counterContainers.forEach((container) => {
    try {
      const counter = new SimpleCounter(container);
      counters.push(counter);
    } catch (error) {
      console.error('Ошибка при инициализации счетчика:', error);
      // Дополнительные действия при ошибке, если необходимо
    }
  });
}

function increaseCounter(button) {
  try {
    const index = findIndex(button);
    counters[index].increase();
  } catch (error) {
    console.error('Ошибка при увеличении счетчика через кнопку:', error);
    // Дополнительные действия при ошибке, если необходимо
  }
}

function decreaseCounter(button) {
  try {
    const index = findIndex(button);
    counters[index].decrease();
  } catch (error) {
    console.error('Ошибка при уменьшении счетчика через кнопку:', error);
    // Дополнительные действия при ошибке, если необходимо
  }
}

function findIndex(element) {
  try {
    const container = element.closest('.basket-item');
    return counters.findIndex((counter) => counter.container === container);
  } catch (error) {
    console.error('Ошибка при поиске индекса элемента:', error);
    // Дополнительные действия при ошибке, если необходимо
    return -1;
  }
}

initializeCounters();
