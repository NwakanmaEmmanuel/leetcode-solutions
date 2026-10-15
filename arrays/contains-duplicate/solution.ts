function containsDuplicate(nums: number[]): boolean {

    const seen = new Set<number>()

    for (const num of nums){
        if (seen.has(num)){
            return true
        }
        seen.add(num)
    }
    return false
}

const num = [4, 7, 2, 7]

const results = containsDuplicate(num);

console.log(results);
console.log(num);