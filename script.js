let musicas = [
    {titulo: "EU SOU O TREM", artista: "Filipe Ret, L7nnon e MC Cabelinho", src:"assets/audio/Eu sou o trem.mp3", img:"assets/images/capa.jpg"},
   
    {titulo: "Groupies", artista: "Doode, Matuê e Teto", src:"./assets/audio/Groupies.mp3", img:"assets/images/capa2.png"},
    
    {titulo: "Paypal", artista: "Teto", src:"assets/audio/Paypal.mp3", img:"assets/images/capa3.png"}
];


let musica = document.querySelector("audio");
let indexMusica = 0;
let duracaoMusica = document.querySelector(".fim");
let imagem = document.querySelector("img");
let nomeMusica = document.querySelector(".descricao h2");
let nomeArtista = document.querySelector(".descricao i");

renderizarMusica(indexMusica);

// duracaoMusica.textContent = segMinutos(Math.floor(musica.duration));

//Eventos

document.querySelector(".play").addEventListener("click", tocarMusica);
document.querySelector(".botao-pause").addEventListener("click", pausarMusica);
musica.addEventListener("timeupdate", attBarra);

document.querySelector(".musica-anterior").addEventListener('click', () => {
    indexMusica--;
    renderizarMusica(indexMusica);
});

document.querySelector(".proxima-musica").addEventListener('click', () => {
    indexMusica++;
    renderizarMusica(indexMusica);
});


//Funções

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segMinutos(Math.floor(musica.duration));
    });
}


function tocarMusica(){
    musica.play();
}

function pausarMusica(){
    musica.pause();
}

function attBarra(){
    let barra = document.querySelector("progress");
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoMusica = document.querySelector(".inicio");
    tempoMusica.textContent = segMinutos(Math.floor(musica.currentTime));
}

function segMinutos(segundos){
    let campoMinuto = Math.floor(segundos / 60);
    let campoSegundo = segundos % 60;

    if(campoSegundo < 10){
        campoSegundo = "0" + campoSegundo;
    }

    return campoMinuto + ":" + campoSegundo;
}
