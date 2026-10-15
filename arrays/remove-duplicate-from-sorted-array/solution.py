


def remove_duplicates(nums):
    i = 0;
    for j in range(len(nums)):
        i+=1
        nums[j] = nums[i]

    return i + 1
