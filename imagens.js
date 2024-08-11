let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemLucca;

let somDatrilha;
let somAmbientacao;
let somColisao;
let somPonto;

function preload() {
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemLucca = loadImage("imagens/Lucca.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro2, imagemCarro, imagemCarro3, imagemLucca];
  
  somDatrilha = loadSound("sons/trilha.mp3");
  somAmbientacao = loadSound("sons/ambientacao.mp3");
  somColisao = loadSound("sons/colisao.mp3");
  somPonto = loadSound("sons/ponto.mp3")
}