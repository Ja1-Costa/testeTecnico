//tecnica 2 

function contarLetrasA(texto) {
  const textoMinusculo = texto.toLowerCase();

  const ocorrencias = textoMinusculo.match(/a/g);

  if (ocorrencias !== null) {
    return ocorrencias.length;
  } else {
    return 0;
  }
}

const minhaString = "Olá, mundo! A letra A aparece várias vezes.";
const quantidadeDeAs = contarLetrasA(minhaString);

console.log(`A letra 'a' aparece ${quantidadeDeAs} vezes na string.`);