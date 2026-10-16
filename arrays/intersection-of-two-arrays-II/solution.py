def intersect(nums1, nums2):
    result = []
    frequency = {}

    for num in nums2:
        frequency[num] = frequency.get(num, 0) + 1

    for num in nums1:
        count = frequency.get(num, 0)

        if count > 0:
            result.append(num)
            frequency[num] = count - 1
    return result
