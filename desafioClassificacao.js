let nivelHeroi = ''

function classificaHeroiPorVitoria(qtdVitorias, qtdDerrotas) {
  saldoVitorias = qtdVitorias - qtdDerrotas;
  if (saldoVitorias <= 10) {
    nivelHeroi = 'Ferro';
  } else if (saldoVitorias <= 20) {
    nivelHeroi = 'Bronze';
  } else if (saldoVitorias <= 50) {
    nivelHeroi = 'Prata';
  } else if (saldoVitorias <= 80) {
    nivelHeroi = 'Ouro';
  } else if (saldoVitorias <= 90) {
    nivelHeroi = 'Diamante';
  } else if (saldoVitorias <= 100) {
    nivelHeroi = 'Lendário';
  } else if (saldoVitorias >= 101) {
    nivelHeroi = 'Imortal'
  } else {
    console.log('Quantidade de vitória ou derrota está incorreto!')
  }
  return saldoVitorias, nivelHeroi;
}
console.log(`O Herói tem um saldo de ${saldoVitorias} vitórias e está no nivel ${nivelHeroi}`)

classificaHeroiPorVitoria('a',0);

