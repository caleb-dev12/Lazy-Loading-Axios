// Selecionando todas as imagens dentro dos elementos com a classe "image-container"
const images = document.querySelectorAll(".image-container img");

// Criando um IntersectionObserver para observar quando as imagens entram na viewport
const observer = new IntersectionObserver((entries, observer) => {
    // Iterando sobre cada entrada (imagem) observada
    entries.forEach(entry => {
        // Verificando se a imagem não está intersectando (não está visível na viewport)
        if (!entry.isIntersecting) return;

        // Obtendo a referência para a imagem que entrou na viewport
        const image = entry.target;
        
        // Modificando o atributo 'src' da imagem para carregar uma versão de maior resolução
        image.src = image.src.replace("&w=10&", "&w=1000&");

        // Parando de observar a imagem após modificá-la (para evitar repetições)
        observer.unobserve(image);
    });
}, {});

// Observando cada imagem selecionada
images.forEach((image) => {
    observer.observe(image);
});
