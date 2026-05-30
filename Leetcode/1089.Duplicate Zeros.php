class Solution {

    /**
     * @param Integer[] $arr
     * @return NULL
     */
    function duplicateZeros(&$arr) {
        $tmp = [];

        foreach ($arr as $k => $v) {

            array_push($tmp, $v);

            if($v == 0) {
                array_push($tmp, 0);
            }

        }
        foreach($arr as $k => $v) {
            $arr[$k] = $tmp[$k];
        }   
    
    }

}
