document.addEventListener("DOMContentLoaded", function () {
    try {
        var hearts = document.querySelectorAll(".heart");

        hearts.forEach(function (heart) {
            try {
                heart.addEventListener("click", function () {
                    try {
                        if (heart.classList.contains("liked")) {
                            heart.innerHTML = '<i class="fa fa-heart-o card-item__btn-svg" aria-hidden="true"></i>';
                            heart.classList.remove("liked");
                        } else {
                            heart.innerHTML = '<i class="fa fa-heart card-item__btn-svg" aria-hidden="true"></i>';
                            heart.classList.add("liked");
                        }
                    } catch (error) {
                        console.error("An unexpected error occurred in heart click:", error);
                    }
                });
            } catch (error) {
                console.error("An unexpected error occurred in forEach loop:", error);
            }
        });
    } catch (error) {
        console.error("An unexpected error occurred in DOMContentLoaded event:", error);
    }
});
