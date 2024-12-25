function validateForm() {
  const productName = document.getElementById('productName').value.trim();
  const quantity = document.getElementById('quantity').value.trim();
  const userEmail = document.getElementById('userEmail').value.trim();
  const deliveryDate = document.getElementById('deliveryDate').value.trim();
  let isValid = true;
  let message = '';

  if (!productName) {
    message += 'Введите корректное название продукта.\n';
    isValid = false;
  }

  if (
    !quantity ||
    isNaN(quantity) ||
    !Number.isInteger(Number(quantity)) ||
    Number(quantity) <= 0
  ) {
    message += 'Введите корректное количество (целое положительное число).\n';
    isValid = false;
  }

  const emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
  if (!userEmail || !emailPattern.test(userEmail)) {
    message += 'Введите корректный E-mail.\n';
    isValid = false;
  }

  if (!deliveryDate || isNaN(Date.parse(deliveryDate))) {
    message += 'Введите корректную дату доставки.\n';
    isValid = false;
  }

  if (isValid) {
    const output = `Заказ принят:
        Продукт: ${productName}
        Количество: ${quantity}
        E-mail: ${userEmail}
        Дата доставки: ${deliveryDate}`;
    document.getElementById('orderOutput').innerText = output;
    document.getElementById('orderOutput').style.display = 'block';
    document.getElementById('errorMessage').innerText = '';
  } else {
    document.getElementById('orderOutput').style.display = 'none';
    document.getElementById('errorMessage').innerText = message;
  }
}

// Увеличение картинки при наведении
const imageBanner = document.querySelector('.image-banner img');
imageBanner.style.transition = 'transform 0.5s';

imageBanner.onmouseover = function () {
  this.style.transform = 'scale(1.2)';
};

imageBanner.onmouseout = function () {
  this.style.transform = 'scale(1.0)';
};

// Изменение текста кнопки при клике и возвращение исходного текста через 2 секунды
const button = document.querySelector('button');
button.onclick = function () {
  const originalText = this.textContent;
  this.textContent = 'Загрузка...';

  setTimeout(() => {
    this.textContent = originalText;
  }, 2000);
};
