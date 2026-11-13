def isAnagram(s, t):
    if len(s) != len(t):
        return False

    frequency = [0] * 26

    for i in range(len(s)):
        frequency[ord(s[i]) - ord('a')] += 1
        frequency[ord(t[i]) - ord('a')] -= 1

    for count in frequency:
        if count != 0:
            return False  
    return True