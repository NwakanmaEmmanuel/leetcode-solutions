def reverse(x):
    INT_MIN = -2147483648
    INT_MAX = 2147483647

    sign = -1 if x < 0 else 1
    x = abs(x)

    result = 0

    while x > 0:
        digit = x % 10

        x //= 10

        result = result * 10 + digit

        if result > INT_MAX:
            return 0

    result *= sign

    if result < INT_MIN or result > INT_MAX:
        return 0

    return result