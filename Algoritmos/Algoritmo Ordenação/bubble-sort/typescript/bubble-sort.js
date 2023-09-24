"use strict";
var vetor = [10, 5, 3, 2, 4, 7, 1, 8, 0, 6];
function bubbleTS(vetor) {
    for (let i = 0; i < vetor.length - 1; i++) {
        for (let j = 1; j < vetor.length - i; j++) {
            if (vetor[j - 1] > vetor[j]) {
                [vetor[j], vetor[j - 1]] = [vetor[j - 1], vetor[j]];
            }
        }
    }
    return vetor;
}
console.log("bubbleTS LUI => ", bubbleTS(vetor));
//# sourceMappingURL=bubble-sort.js.map