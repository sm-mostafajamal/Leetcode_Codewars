class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
   function findMaxConsecutiveOnes($nums) {

			$max_num = 0;
			$count = 0;
				
			foreach ($nums as $i)  {
					
				if($i == 1) {
					$count++;
				}
						
				if(($count > $max_num)) {
					$max_num = $count;
				}
				
				if($i == 0) {
					$count = 0;
				}
				
			}

			return $max_num;

		}
}
