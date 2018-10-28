import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;

public class FindMaxPairs {

    //TODO Make hashmap / alternative ie: array of pointers to tuples of (sum, count)

    public long maxPairs(Long[] nums){
        HashMap<Long, Long> sums = new HashMap<>();
        for(int i = 0; i < nums.length-1; i++){
            for(int j=0; j < nums.length; j++){
                long sum = nums[i] + nums[j];
                if(sums.containsKey(sum)){
                    sums.put(sum, sums.get(sum) + 1);
                }else{
                    sums.put(sum, Long.parseLong("1"));
                }
            }
        }
        long maxCount = 0;
        Long maxKey = null;
        for(Long sum : sums.keySet()){
            if(maxKey == null){
                maxCount = sums.get(sum);
                maxKey = sum;
            }
            else if(sums.get(sum) > maxCount){
                maxCount = sums.get(sum);
                maxKey = sum;
            }else if(sums.get(sum) == maxCount){
                if(sum < maxKey) {
                    maxKey = sum;
                }
            }
        }
        return maxKey;
    }

    /**
     * Handles IO and prepares input for maxPairs algorithm
     * @throws IOException
     */
    public static void main(String[] args) throws IOException {

        BufferedReader f = new BufferedReader(new InputStreamReader(System.in));
        String firstLine = f.readLine();
        String secondLine = f.readLine();

        int n = Integer.parseInt(firstLine); // get length of list

        String[] tmp = secondLine.split(" ", n);
        Long[] nums = new Long[n];
        for(int i = 0; i < tmp.length; i++){
            nums[i] = Long.parseLong(tmp[i]);
        }

        FindMaxPairs test = new FindMaxPairs();
        System.out.println(test.maxPairs(nums));

    }

}
