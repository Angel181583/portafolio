document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const modal = document.createElement('div');
    modal.id = 'modal';
    const modalContent = document.createElement('div');
    modalContent.id = 'modal-content';
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    carousel.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            const clickedImageSrc = event.target.src;
            const modalImage = document.createElement('img');
            modalImage.src = clickedImageSrc;
            modalContent.innerHTML = '';
            modalContent.appendChild(modalImage);
            modal.style.display = 'flex'; // Muestra el modal al hacer clic en la imagen
        }
    });

    modal.addEventListener('click', function () {
        modal.style.display = 'none'; // Oculta el modal al hacer clic fuera de la imagen
    });
});