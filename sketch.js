function setup() {
  createCanvas(500, 400);
  
  // Cria um botão para iniciar o áudio
  let botaoIniciar = createButton('Iniciar Música');
  botaoIniciar.position(width - 120, 10);
  botaoIniciar.mousePressed(iniciarMusica);
}

function iniciarMusica() {
  somDatrilha.loop(); // Inicia o loop da música
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}

