function squareDigits(num){
let numStr = num.toString();  
  let results = [];             
  for (let i = 0; i < numStr.length; i++){  
      results[i] = numStr[i] * numStr[i];    
  }
  return Number(results.join(''));
}