"use strict";
var vetor = [5, 3, 2, 4, 7, 1, 0, 6];
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
console.log("SELECTION SORT 1 TS => ", selectionSort(vetor));
//# sourceMappingURL=selection-sort.js.map