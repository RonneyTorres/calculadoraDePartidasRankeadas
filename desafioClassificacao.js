let qtdVitorias = 0;
let qtdDerrotas = 0;

function classificaHeroiPorVitoria(qtdVitorias, qtdDerrotas) {
  saldoVitorias = qtdVitorias - qtdDerrotas;
  //Adicionado estrutura de repetição apenas para incremento automático de vitórias.
  //Caso seja apenas para verificação simples de nivel, so remover laço (For) e adicionar valores.
  for(i = saldoVitorias; i <= 130; i = i + 10) {
    if (i <= 10) {
      nivelHeroi = 'Ferro';
    } else if (i <= 20) {
      nivelHeroi = 'Bronze';
    } else if (i <= 50) {
      nivelHeroi = 'Prata';
    } else if (i <= 80) {
      nivelHeroi = 'Ouro';
    } else if (i <= 90) {
      nivelHeroi = 'Diamante';
    } else if (i <= 100) {
      nivelHeroi = 'Lendário';
    } else {
      nivelHeroi = 'Imortal';
    }
    console.log(`O Herói tem um saldo de ${i} vitórias e está no nivel ${nivelHeroi}`)
  }
}

classificaHeroiPorVitoria(qtdVitorias,qtdDerrotas);
