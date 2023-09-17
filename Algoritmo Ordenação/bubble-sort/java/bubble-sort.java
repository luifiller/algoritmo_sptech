import java.util.Arrays;

class BubbleSort {
    public static void bubbleSort(int[] v) {
        for (int i = 0; i < v.length - 1; i++) {
            for (int j = 1; j < v.length - i; j++) {
                if (v[j-1] > v[j]) {
                    int aux = v[j];

                    v[j] = v[j-1];
                    v[j-1] = aux;
                }
            }
        }

        System.out.printf("Vetor ordenado %s", Arrays.toString(v));
    }

    public static void main(String[] args) {
        int[] v1 = { 4, 7, 5, 2, 10, 8, 1, 6, 3 };

        bubbleSort(v1);
    }
}