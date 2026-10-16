function intersect(nums1: number[], nums2: number[]): number[] {
    const frequency = new Map<number, number>()
    const result: number[] = [];

    for (const num of nums2){
        frequency.set(num, (frequency.get(num) || 0) + 1)
    }

    for (const num of nums2){
        const count = frequency.get(num) || 0

        if (count > 0){
            result.push(num)
            frequency.set(num, count - 1)
        }
    }

    return result
}

const nums1 = [2, 2, 2]
const nums2 = [2, 2]


const results = intersect(nums1, nums2);

console.log(results);
