let currentIndex = 0;
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryWrapper = document.querySelector('.gallery-wrapper');

function moveCarousel(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1;
    } else if (currentIndex >= galleryItems.length) {
        currentIndex = 0;
    }
    const offset = currentIndex * -360; // Largura de cada imagem mais o espaçamento
    galleryWrapper.style.transform = `translateX(${offset}px)`;
}
