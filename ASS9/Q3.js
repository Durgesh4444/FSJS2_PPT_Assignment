function factorial(n)
    {
        var res = 1, i;
        for (i = 2; i <= n; i++)
            res *= i;
        return res;
    }
console.log(factorial(5));