// Distância entre as cidades em km
const distanciaTotal = 100;

// Velocidade em km/h
const velocidadeCarro = 110;
const velocidadeCaminhao = 80;

// Tempo extra em horas para passar pelos pedágios
const tempoPedagioCaminhao = 10 / 60;
const totalTempoPedagioCaminhao = tempoPedagioCaminhao * 2;

// Distância percorrida até o ponto de encontro em km
const tempoEncontro = distanciaTotal / (velocidadeCarro + velocidadeCaminhao);
const distanciaCarro = velocidadeCarro * tempoEncontro;
const distanciaCaminhao = (velocidadeCaminhao * tempoEncontro) + totalTempoPedagioCaminhao;

// Distância restante até Ribeirão Preto em km
const distanciaRestanteCarro = distanciaTotal - distanciaCarro;
const distanciaRestanteCaminhao = distanciaTotal - distanciaCaminhao;

// Verificação de qual veículo está mais próximo de Ribeirão Preto
if (distanciaRestanteCarro < distanciaRestanteCaminhao) {
  console.log("O carro está mais próximo de Ribeirão Preto, a", distanciaRestanteCarro.toFixed(2), "km de distância.");
} else {
  console.log("O caminhão está mais próximo de Ribeirão Preto, a", distanciaRestanteCaminhao.toFixed(2), "km de distância.");
}
