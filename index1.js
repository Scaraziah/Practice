"use strict";

// for(let i = 0; i < 100; i++){
//         var printNumbers = i + 1; 
//     if(printNumbers % 3 == 0 && printNumbers % 5 == 0){
//          console.log("fizzbuzz");
//     }
//     else if(printNumbers % 3 == 0){
//         console.log("fizz");
//     }
//     else if(printNumbers % 5 == 0){
//         console.log("buzz");
//     }
//     else{
//         console.log(printNumbers);
//     }
// }

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