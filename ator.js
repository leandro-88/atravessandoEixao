let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 42, 42);
}

function movimentaAtor() {
  // Controle com teclas físicas (para desktop)
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (yAtor < height - 42) yAtor += 3; // Ajusta para a altura do ator
  }
  if (keyIsDown(LEFT_ARROW)) {
    if (xAtor > 0) xAtor -= 3; // Restringe o movimento para a esquerda
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (xAtor < width - 42) xAtor += 3; // Ajusta para a largura do ator
  }

  // Controle com clique do mouse
  if (mouseIsPressed) {
    // Movimenta o ator para a posição do mouse
    xAtor = mouseX - 21; // Ajuste o 21 conforme o centro do ator
    yAtor = mouseY - 21; // Ajuste o 21 conforme o centro do ator

    // Restringe a posição do ator para dentro da tela
    xAtor = constrain(xAtor, 0, width - 42); // Ajusta para a largura do ator
    yAtor = constrain(yAtor, 0, height - 42); // Ajusta para a altura do ator
  }

  // Verifica se o ator marcou um ponto após a movimentação
  marcaPonto();
}

function verificaColisao() {
  // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor + 21, yAtor + 21, 21); // Ajuste o 21 conforme o raio do ator
    if (colisao) {
      somColisao.play();
      voltaInicio();
      if (meusPontos > 0) {
        meusPontos--; 
      } else {
        meusPontos = 0;
      }
    }
  }
}

function voltaInicio() {
  yAtor = 366;
  xAtor = width / 2 - 21; // Ajusta a posição inicial para o centro da tela
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(252, 75, 8));
  text(meusPontos, width / 5, 27);
}

function marcaPonto() {
  if (yAtor < 5) {
    meusPontos++;
    somPonto.play();
    voltaInicio();
  }
}
