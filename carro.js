// codigo carro

let xCarros = [600, 600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 153, 210, 270, 315, 3]
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3, 1]
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for (let i = 0; i < yCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro() {
  for (let i = 0; i < xCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
    xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro) {
  return xCarro < -50
}