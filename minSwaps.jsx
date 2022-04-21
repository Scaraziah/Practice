// Minimum number of swaps required to sort an array
// Given an array of n distinct elements, find the minimum number of swaps required to sort the array.

// Examples: 

// Input: {4, 3, 2, 1}
// Output: 2
// Explanation: Swap index 0 with 3 and 1 with 2 to 
//               form the sorted array {1, 2, 3, 4}.

// Input: {1, 5, 4, 3, 2}
// Output: 2

let a = [1, 3, 5, 6, 4, 2]
function minSwaps(arr) {
    let n = arr.length;
    let arrpos = [];
    for ( let i = 0; i < n; i++)
        arrpos.push([arr[i], i]);
        arrpos.sort(function(a,b){
            return a[0]-b[0];
        }); 
    
        let vis = new Array(n);
        for(let i = 0; i < n; i++)
            {
                vis[i] = false
            }
            let ans = 0
        
        for (let i = 0; i< n; i++){
            if (vis[i] || arrpos[i][1] == i)
            continue;
            let cycle_size = 0;
            let j = i;
            while (!vis[j])
            {
                vis[j]=true;
                j= arrpos [j][1];
                cycle_size++
            }
            if(cycle_size > 0){
                ans += (cycle_size -1);
            }
        }
        return ans;
}

console.log(minSwaps(a))