import java.util.Arrays;

class SelectionSort {
    public static void selectionSort(int[] v) {
        int indiceDoMenor;

        for (int i = 0; i < v.length - 1; i++) {
            indiceDoMenor = i;

            for (int j = i + 1; j < v.length; j++) {
                if (v[j] < v[indiceDoMenor]) {
                    indiceDoMenor = j;
                }
            }

            if (i != indiceDoMenor) {
                int aux = v[i];
                v[i] = v[indiceDoMenor];
                v[indiceDoMenor] = aux;
            }
        }

        System.out.printf("Vetor ordenado => %s", Arrays.toString(v));
    }

    public static void main(String[] args) {
        int[] v1 = { 4, 7, 5, 2, 10, 8, 1, 6, 3 };

        selectionSort(v1);
    }
}
