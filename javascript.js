// Получаем элементы
const subscribeBtn = document.getElementById('subscribeBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const submitEmailBtn = document.getElementById('submitEmailBtn');
const emailInput = document.getElementById('emailInput');
const thankYouPopup = document.getElementById('thankYouPopup');
const thankYouCloseBtn = document.getElementById('thankYouCloseBtn');

// Функция для переключения видимости всплывающего окна
function popupToggle() {
    popup.style.display = popup.style.display === 'flex' ? 'none' : 'flex';
}

// Функция для отображения окна "Спасибо за подписку"
function showThankYouPopup() {
    popup.style.display = 'none'; // Закрыть окно ввода email
    thankYouPopup.style.display = 'flex'; // Показать окно благодарности
}

// Обработчик события для кнопки подписки
subscribeBtn.addEventListener('click', popupToggle);

// Обработчик события для кнопки закрытия окна ввода email
closeBtn.addEventListener('click', popupToggle);

// Обработчик события для кнопки подписки по email
submitEmailBtn.addEventListener('click', function() {
    const email = emailInput.value.trim();
    
    if (email) {
        showThankYouPopup();
        emailInput.value = ''; // Очистить поле ввода
    } else {
        alert("Пожалуйста, введите корректный Email.");
    }
});

// Обработчик события для закрытия окна благодарности
thankYouCloseBtn.addEventListener('click', function() {
    thankYouPopup.style.display = 'none'; // Закрыть окно благодарности
});

// Закрытие окна при клике вне него
window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popupToggle();
    } else if (event.target === thankYouPopup) {
        thankYouPopup.style.display = 'none';
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img');
    
    // Функция для добавления класса при загрузке изображений
    function onImageLoad(image) {
        image.classList.add('loaded');
    }

    // Проверяем, загружены ли изображения
    images.forEach(function(img) {
        if (img.complete) {
            onImageLoad(img);
        } else {
            img.onload = () => onImageLoad(img);
        }
    });
});
document.getElementById("orderButton").addEventListener("click", function() {
    document.getElementById("orderForm").classList.remove("hidden");
});

document.getElementById("submitOrder").addEventListener("click", function() {
    const bouquetName = document.getElementById("bouquetName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    if (bouquetName && phoneNumber) {
        alert("Спасибо за заказ!");
        document.getElementById("orderForm").classList.add("hidden");
        document.getElementById("bouquetName").value = '';
        document.getElementById("phoneNumber").value = '';
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
});


// Получаем элементы
var modal = document.getElementById("myModal");
var btn = document.getElementById("requestButton");
var span = document.getElementsByClassName("close")[0];
var submitButton = document.getElementById("submitButton");


document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img');
    
    // Функция для добавления класса при загрузке изображений
    function onImageLoad(image) {
        image.classList.add('loaded');
    }

    // Проверяем, загружены ли изображения
    images.forEach(function(img) {
        if (img.complete) {
            onImageLoad(img);
        } else {
            img.onload = () => onImageLoad(img);
        }
    });
});

document.getElementById("orderButton").onclick = function() {
    document.getElementById("modal").style.display = "block";
};

document.getElementById("closeModal").onclick = function() {
    document.getElementById("modal").style.display = "none";
};

document.getElementById("submitButton").onclick = function() {
    const phone = document.getElementById("phone").value;
    const bouquet = document.getElementById("bouquet").value;

    if (phone && bouquet) {
        alert("Спасибо за заказ!");
        document.getElementById("modal").style.display = "none";
        // Здесь можно добавить код для отправки данных на сервер
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
};

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
