function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const modalImage = document.getElementById('modalImage');
    modalImage.src = images[currentImageIndex];
}

// Fecha o modal ao clicar fora da imagem
const modal = document.getElementById('myModal');
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});
