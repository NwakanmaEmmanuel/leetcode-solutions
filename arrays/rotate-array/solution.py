def rotate(nums, k):
    n = len(nums)
    k = k % n

    reverse(nums, 0 , len(nums))
    reverse(nums, 0 , k - 1)
    reverse(nums, k , len(nums))

    def reverse(nums, left, right):
        while left < right:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
            right -= 1
