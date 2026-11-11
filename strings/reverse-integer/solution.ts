function reverse(x: number): number {
    const INT_MIN = -2147483648;
    const INT_MAX = 2147483647;

    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    let result = 0;

    while (x > 0) {
        const digit = x % 10;

        x = Math.trunc(x / 10);

        result = result * 10 + digit;

        if (result > INT_MAX) {
            return 0;
        }
    }

    result *= sign;

    if (result < INT_MIN || result > INT_MAX) {
        return 0;
    }

    return result;
}