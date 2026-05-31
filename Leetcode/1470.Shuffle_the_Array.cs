using System;

public class Solution
{
    public int[] Shuffle(int[] nums, int n)
    {
        int[] result = new int[2*n];

        for(var i = 0; i < n; i++)
        {
            result[2 * i] = nums[i];
            result[2 * i + 1] = nums[n + i];
        }

        return result;
    }
}

// var sol = new Solution();

// var nums = new int[] { 2, 5, 1, 3, 4, 7 }; // [2,3,5,4,1,7] 
// var result = sol.Shuffle(nums, 3);

// Console.WriteLine(string.Join(", ", result));