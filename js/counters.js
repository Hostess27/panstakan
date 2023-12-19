// Установите дату окончания обратного отсчета
const endDate = new Date("December 31, 2023 23:59:59").getTime();

// Создайте функцию для инициализации обратного отсчета
function initializeCountdown(containerId) {
  try {
    const countdownContainer = document.getElementById(containerId);

    if (!countdownContainer) {
      throw new Error(`Container with id ${containerId} not found`);
    }

    const countdownItems = [
      { label: 'Days', divisor: 1000 * 60 * 60 * 24 },
      { label: 'Hours', divisor: 1000 * 60 * 60 },
      { label: 'Min', divisor: 1000 * 60 },
      { label: 'Sec', divisor: 1000 }
    ];

    countdownItems.forEach(item => {
      const countdownItem = document.createElement('div');
      countdownItem.classList.add('countdown-item');

      const countdownValue = document.createElement('span');
      countdownValue.classList.add('countdown-value');
      countdownValue.innerText = '0'; // Начальное значение

      const countdownLabel = document.createElement('div');
      countdownLabel.classList.add('countdown-label');
      countdownLabel.innerText = item.label;

      countdownItem.appendChild(countdownValue);
      countdownItem.appendChild(countdownLabel);
      countdownContainer.appendChild(countdownItem);
    });

    // Обновление обратного отсчета
    function updateCountdown() {
      try {
        const now = new Date().getTime();
        let distance = endDate - now;

        if (distance > 0) {
          countdownItems.forEach((item, index) => {
            const value = Math.floor(distance / item.divisor);
            distance %= item.divisor;

            const countdownValues = countdownContainer.querySelectorAll('.countdown-value');
            countdownValues[index].innerText = padWithZero(value);
          });

          setTimeout(updateCountdown, 1000);
        } else {
          countdownContainer.innerHTML = '<span>Countdown Expired!</span>';
        }
      } catch (error) {
        console.error('Ошибка при обновлении обратного отсчета:', error);
        // Дополнительные действия при ошибке, если необходимо
      }
    }

    // Добавим функцию для добавления ведущего нуля
    function padWithZero(value) {
      return value < 10 ? `0${value}` : value;
    }

    // Инициализация обратного отсчета
    updateCountdown();
  } catch (error) {
    console.error('Ошибка при инициализации обратного отсчета:', error);
    // Дополнительные действия при ошибке, если необходимо
  }
}

// Инициализация обратного отсчета для каждого контейнера
initializeCountdown('countdown-container1');
initializeCountdown('countdown-container2');
initializeCountdown('countdown-container3');
initializeCountdown('countdown-container4');
