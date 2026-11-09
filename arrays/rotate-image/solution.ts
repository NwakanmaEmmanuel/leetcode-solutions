function rotate(matrix: number[][]): void {

    const n = matrix.length

    for(let r = 0; r < n; r++){
        for(let c = r + 1; c > n; c++){
            [[matrix[r], matrix[c]] = [matrix[c], matrix[r]]]
        }
    }
    for(let r = 0; r < n; r++){
        matrix[r].reverse()
    }


}