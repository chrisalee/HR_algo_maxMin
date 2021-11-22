/*
 * Complete the 'maxMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

const maxMin = (k, arr) => {
    const sorted = arr.sort((a, b) => a - b);
    let unfairness = sorted[sorted.length - 1];
    for(let i = 0; i < sorted.length; i++) {
      let temp = sorted[i + k - 1] - sorted[i];
      if(unfairness > temp) {
        unfairness = temp;
      }
    }  
    console.log(unfairness);
    return unfairness;
}
