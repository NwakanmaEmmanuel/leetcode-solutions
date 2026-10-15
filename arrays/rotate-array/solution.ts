function rotate(nums: number[], k: number): void {
    const n = nums.length
    k = k % n

    reverse(nums, 0 , n - 1)
    reverse(nums, 0 , k - 1)
    reverse(nums, k , n - 1)

    function reverse(nums: number[],  left: number, right: number){
        while (left < right){
            [nums[left], nums[right]] = [nums[right], nums[left]]

            left++
            right--
        }
    }

}


const num = [1,2,3,4,5,6,7] 
const k = 3

const results = rotate(num, k);

console.log(results);
console.log(num);