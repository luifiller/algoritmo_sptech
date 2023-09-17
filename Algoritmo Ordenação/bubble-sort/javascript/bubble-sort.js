/* bubble-sort usando javascript
    Algoritmo simples
    Os elementos com as maiores chaves do conjunto vão emergindo para o fim do vetor(topo).
    Troca elementos adjacentes
    O algoritmo é ineficiente para vetores grandes.
    Complexidade: 
        melhor caso: O(n)
        pior caso: O(n^2) 
*/

var vetor = [
  10, 5, 3, 2, 4, 7, 1, 8, 0, 6, 90, 52, 43, 12, 33, 99, 77, 66, 55, 44, 88, 11,
  22, 33, 44, 55, 66, 77, 88, 99,
];
var vetor1 = [
  10, 5, 3, 2, 4, 7, 1, 8, 0, 6, 90, 52, 43, 12, 33, 99, 77, 66, 55, 44, 88, 11,
  22, 33, 44, 55, 66, 77, 88, 99,
];

function bubbleSort(vetor) {
  for (let i = 0; i < vetor.length - 1; i++) {
    for (let j = 1; j < vetor.length - i; j++) {
      if (vetor[j - 1] > vetor[j]) {
        [vetor[j], vetor[j - 1]] = [vetor[j - 1], vetor[j]];
      }
    }
  }
  return vetor;
}

console.log("SORT 1 W/ FORs", bubbleSort(vetor));

function bubbleSortDoWhile(vetor) {
  let swap = false;
  let last = vetor.length - 1;

  do {
    swap = false;
    for (let i = 0; i < last; i++) {
      if (vetor[i] > vetor[i + 1]) {
        [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]];
        swap = true;
      }
    }
    last--;
  } while (swap);

  return vetor1;
}

console.log("SORT 2 W/ DO-WHILE", bubbleSortDoWhile(vetor1));
