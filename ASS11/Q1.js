function mySqrt(x) {
    if (x == 0) {
        return 0;
    }
    let i = 1;
    while (i * i <= x) {
        i++;
    }
    return i - 1;
}