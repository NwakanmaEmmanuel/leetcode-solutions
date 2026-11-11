def firstUniqChar(s):
    frequency = {}

    for char in s:
        frequency[char] = frequency.get(char, 0) + 1

    for i in len(s):
        if frequency[s[i]] == 1:
            return i
    return -1