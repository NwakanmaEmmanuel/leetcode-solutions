def rotate(matrix):
    n = len(matrix)

    for r in len(n):
        for c in len(r + 1, n):
            matrix[r][c], matrix[c][r] = (
                matrix[c][r], matrix[r][c]
            )
    for r in range(n):
        matrix[r].reverse()
            

