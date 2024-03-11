(() => {
    const enlargeImage = (event) => {
        const imagePath = event.target.src;
        const largeImage = document.querySelector(".large-image img");
        largeImage.src = imagePath;
        const largeImageContainer = document.querySelector(".large-image");
        largeImageContainer.style.display = "block";
    }

    const closeLargeImage = () => {
        const largeImageContainer = document.querySelector(".large-image");
        largeImageContainer.style.display = "none";
    }

    const initializeEvent = () => {
        const galleryImages = document.querySelectorAll(".gallery-container img");
        galleryImages.forEach((img) =>{
            img.addEventListener("click", enlargeImage);
        });


        const closeButton = document.querySelector(".large-image button");
        closeButton.addEventListener("click", closeLargeImage);
    }

    const populateImages = (container) => {
        const images = [
            "./assets/images/photo_2.avif",
            "./assets/images/photo_1.avif",
            "./assets/images/photo_5.avif",
            "./assets/images/photo_3.avif",
            "./assets/images/photo_4.avif",
            "./assets/images/photo_6.avif"
        ];

        const allImages = images.map((image) => {
            return `
                <div>
                    <img src="${image}" alt="">
                </div>
            `
        });
        const galleryContainer = document.querySelector(container);
        galleryContainer.innerHTML = allImages.join(" ");
    }

    populateImages(".gallery-container");
    initializeEvent();

})();