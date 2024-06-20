var slide_index = 1;

show_slides(slide_index);

// Avança ou retorna a imagem do carrossel
function plus_slides(n){
    show_slides(slide_index += n);
}

// Setar a dot que corresponde a imagem selecionada no carrossel
function current_slides(n){
    show_slides(slide_index = n);
}

// Fazer a ação de trocar as imagens no carrossel
function show_slides(n){
    var slides = document.getElementsByClassName("fade");
    var dots = document.getElementsByClassName("dot");
    var i;

    // estando na ultima imagem, faz o carrossel voltar para a primeira
    if(n > slides.length){
        slide_index = 1;
    }
    // estando na primeira imagem, faz o carrossel voltar para a ultima
    if(n < 1){
        slide_index = slides.length;
    }

    // Desativa todas as imagens do carrossel
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }

    // Desativar todas as bolinhas que estejam selecionadas
    for(i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slide_index-1].style.display = "block";
    dots[slide_index-1].className += " active";
}