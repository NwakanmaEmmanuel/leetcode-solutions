def plusone(digits):
    for i in range(len(digits), -1, -1, -1):
        if digits < 9:
            digits += 1
            return digits
        
        digits[i] = 0
        
    return [1] + digits