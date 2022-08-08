// change     
// m is size of coins array
function minimumCoins(coinDenominations, m, change)
{
      // table[i] will be storing the minimum number of coins
      
        let table = new Array(change+1);
        // Initialize first table value as zero
        table[0] = 0;
   
   for (let i = 1; i <= change; i++)
        {
            table[i] = Number.MAX_VALUE;
        }
   
     for (let i = 1; i <= change; i++)
        {
            // Go through all coins smaller than i
            for (let j = 0; j < m; j++)
            if (coinDenominations[j] <= i)
            {
                let sub_res = table[i - coinDenominations[j]];
                if (sub_res != Number.MAX_VALUE
                       && sub_res + 1 < table[i])
                    table[i] = sub_res + 1;  
            }   
        }
      if(table[change] == Number.MAX_VALUE)
            return -1;
        
        return table[change];
    }
       
    // Driver program
  
let coinDenominations = [ 1,5,10,20,50 ];
let m = coinDenominations.length;
let change = 71;
 
document.write("Minimum coins required is " +
               minimumCoins(coinDenominations, m, change))