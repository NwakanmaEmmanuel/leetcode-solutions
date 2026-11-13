def firstUniqChar(s):
    frequency = [0] * 26

    # First pass: count character occurrences
    for i in range(len(s)):
        index = ord(s[i]) - ord('a')
        frequency[index] += 1

    # Second pass: find the first unique character
    for i in range(len(s)):
        index = ord(s[i]) - ord('a')

        if frequency[index] == 1:
            return i

    return -1