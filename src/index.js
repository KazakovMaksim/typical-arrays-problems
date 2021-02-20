
exports.min = function min (array) {
  if (arguments.length === 0 || array.length === 0){
    return 0;
  }
  else {
    let min = array[0];
    let i = 0;
    while (i++ < array.length) {
        if (array[i] < min) {
            min = array[i];
        } 
    }
    return min;
  }
}

exports.max = function max (array) {
    if (arguments.length === 0 || array.length === 0){
    return 0;
  } else {
    let max = array[0];
    let i = 0;
    while (i++ < array.length) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }
}

exports.avg = function avg (array) {
  
  if (arguments.length === 0 || array.length === 0){
    return 0;
  } else {
    let average = 0;
    let i = 0;
      do { 
        average += array[i];
         } 
      while (++i < array.length)
      
    return average/array.length;
  } 
}
