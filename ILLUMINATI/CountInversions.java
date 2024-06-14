public class CountInversions {

    public static void main(String[] args) {
        int[] array = {1, 20, 6, 4, 5};
        System.out.println("Given Array:");
        printArray(array);

        CountInversions ci = new CountInversions();
        int inversions = ci.mergeSortAndCount(array, 0, array.length - 1);

        System.out.println("\nNumber of inversions are: " + inversions);
    }

    static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    private int mergeSortAndCount(int[] arr, int left, int right) {
        int count = 0;
        if (left < right) {
            int mid = (left + right) / 2;

            count += mergeSortAndCount(arr, left, mid);
            count += mergeSortAndCount(arr, mid + 1, right);

            count += mergeAndCount(arr, left, mid, right);
        }
        return count;
    }

    private int mergeAndCount(int[] arr, int left, int mid, int right) {
        int[] leftSub = new int[mid - left + 1];
        int[] rightSub = new int[right - mid];

        for (int i = 0; i < leftSub.length; i++)
            leftSub[i] = arr[left + i];
        for (int j = 0; j < rightSub.length; j++)
            rightSub[j] = arr[mid + 1 + j];

        int i = 0, j = 0, k = left, swaps = 0;
        while (i < leftSub.length && j < rightSub.length) {
            if (leftSub[i] <= rightSub[j]) {
                arr[k++] = leftSub[i++];
            } else {
                arr[k++] = rightSub[j++];
                swaps += (mid + 1) - (left + i);
            }
        }

        while (i < leftSub.length) {
            arr[k++] = leftSub[i++];
        }

        while (j < rightSub.length) {
            arr[k++] = rightSub[j++];
        }

        return swaps;
    }
}

