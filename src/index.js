exports.min = function min (array) {
    if (Array.isArray(array) && array.length > 0){
        if (typeof array === 'undefined'|| array.length === 0){
            return 0;
        }
   let min = Math.min(...array);
   return min;
}
return 0;
}


exports.max = function max (array) {
    if (Array.isArray(array) && array.length > 0){
        if (typeof array === 'undefined'|| array.length === 0){
            return 0;
        }
    let max = Math.max(... array);
    return max;
    }
    return 0;
}
     
     
        exports.avg = function avg (array) {
    if (Array.isArray(array) && array.length > 0){
        if (typeof array === 'undefined'|| array.length === 0){
            return 0;
            }
let avg = array.reduce((a, b) => (a + b)) / array.length;    
return avg; 
  
}
return 0;
        }
