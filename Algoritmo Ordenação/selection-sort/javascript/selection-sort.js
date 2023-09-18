/* selection sort no javascript
    Algoritmo simples
    Complexidade: 
        melhor caso: O(n^2)
        pior caso: O(n^2) 
    Na 1ª iteração, o menor elemento é encontrado e colocado na 1ª posição.
    Na 2ª iteração, o segundo menor elemento é encontrado e colocado na 2ª posição.
    E assim por diante até que o vetor esteja ordenado.
    O foco é manipular, primeiro, os índices e, depois, os valores nas suas devidas posições.
*/

var vetor = [
  10, 5, 3, 2, 4, 7, 1, 8, 0, 6, 90, 52, 43, 12, 33, 99, 77, 66, 55, 44, 88, 11,
  22, 33, 44, 55, 66, 77, 88, 99,
];

function selectionSort(vetor) {
  let indiceDoMenor;

  for (let i = 0; i < vetor.length - 1; i++) {
    indiceDoMenor = i;

    for (let j = i + 1; j < vetor.length; j++) {
      if (vetor[j] < vetor[indiceDoMenor]) {
        indiceDoMenor = j;
      }
    }

    if (i !== indiceDoMenor) {
      [vetor[i], vetor[indiceDoMenor]] = [vetor[indiceDoMenor], vetor[i]];
    }
  }

  return vetor;
}

console.log("SELECTION SORT 1 => ", selectionSort(vetor));
