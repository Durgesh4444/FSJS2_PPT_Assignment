function findMinRec(A, n)
{
    if (n == 1)
        return A[0];
         
    return Math.min(A[n - 1],
        findMinRec(A, n - 1));
}