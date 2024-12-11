const imgs = document.getElementById('img');
const img = document.querySelectorAll("#img img");
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let idx = 0;

function carrossel() {
    imgs.style.transform = `translateX(${-idx * 100}%)`; /* Atualizado para usar porcentagem */
}

function nextImage() {
    idx++;
    if (idx > img.length - 1) {
        idx = 0;
    }
    carrossel();
}

function prevImage() {
    idx--;
    if (idx < 0) {
        idx = img.length - 1;
    }
    carrossel();
}

// Evento de clique para as setas
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Configuração para o carrossel automático
setInterval(nextImage, 3000); /* Muda de imagem a cada 3 segundos */