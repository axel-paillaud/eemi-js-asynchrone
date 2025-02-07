const inputSearch = document.getElementById("inputSearch");

// TODO : fetch images

inputSearch.addEventListener("click", () => {
    updateGallery(images);
});

function updateGallery(images) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = ""; // Vide le container
    images.forEach(image => {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const caption = document.createElement("figcaption");

        img.src = image.src;
        img.alt = image.alt;
        caption.textContent = image.caption;

        figure.appendChild(img);
        figure.appendChild(caption);
        gallery.appendChild(figure);
    });
}

