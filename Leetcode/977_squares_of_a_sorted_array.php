class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    
    function sortedSquares($nums) {
        
        $sq_nums = array_map(fn($val) => $val * $val, $nums);
        $N = count($sq_nums);
        $this->quicksort($sq_nums, 0, $N-1);
        return $sq_nums;
        
    }
    
    function partition (&$arr, $low, $high) {
        
        $pivot = $arr[$high];
        $i = $low - 1;

        for($k=$low; $k < $high; $k++) {
            
            if($arr[$k] < $pivot) {

                $i++;
                [ $arr[$i], $arr[$k] ] = [ $arr[$k], $arr[$i] ];

            }	
        }

        [$arr[$i + 1], $arr[$high]] = [$arr[$high], $arr[$i + 1]]; 

        return $i + 1;
        
    }
    
    
    function quicksort(&$arr, $low, $high) {
	
        if($low < $high) {
            
            $pi = $this->partition($arr, $low, $high);			
            $this->quicksort($arr, $low, $pi-1);
            $this->quicksort($arr, $pi+1, $high);
            
        }

    }
}
