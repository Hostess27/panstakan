document.addEventListener('DOMContentLoaded', function () {
    try {
        var coffeeLinks = document.querySelectorAll('.coffe__link');
        var imgElement = document.querySelector('.coffe__grid_img img');

        var imagePaths = [
            '/pictures/jpg/kava-zerno',
            '/pictures/jpg/kava-bez-kof',
            '/pictures/jpg/kava-melena',
            '/pictures/jpg/kava-rozchin'
        ];

        imgElement.setAttribute('srcset', getDefaultImageSrcset());
        imgElement.setAttribute('src', '/pictures/jpg/kava-rozchin.jpg');

        coffeeLinks.forEach(function (link, index) {
            try {
                link.addEventListener('click', function () {
                    var imagePath = imagePaths[index];

                    imgElement.setAttribute('srcset', getImageSrcset(imagePath));
                    imgElement.setAttribute('src', imagePath + '.jpg');
                });
            } catch (error) {
                console.error('Ошибка при добавлении слушателя клика на ссылку:', error);
                // Дополнительные действия при ошибке, если необходимо
            }
        });

        function getDefaultImageSrcset() {
            return (
                '/pictures/jpg/kava-rozchin-mob.jpg 767w, ' +
                '/pictures/jpg/kava-rozchin-tablet.jpg 1023w, ' +
                '/pictures/jpg/kava-rozchin.jpg 1024w'
            );
        }

        function getImageSrcset(imagePath) {
            return (
                imagePath + '-mob.jpg 767w, ' +
                imagePath + '-tablet.jpg 1023w, ' +
                imagePath + '.jpg 1024w'
            );
        }
    } catch (error) {
        console.error('Ошибка при выполнении кода после события DOMContentLoaded:', error);
        // Дополнительные действия при ошибке, если необходимо
    }
});
