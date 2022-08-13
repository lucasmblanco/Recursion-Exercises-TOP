function onMerge(arr){
    let newArray = []; 
    if(arr.length <= 1) {
      return arr
    }
    else {
      let middleIndex = Math.ceil(arr.length / 2)
      let arrA = onMerge(arr.splice(0, middleIndex));
      let arrB = onMerge(arr.splice(-middleIndex)); 
  
      if(arrA[0] < arrB[0]) {
        newArray.push(arrA.shift()); 
        return newArray.concat(onMerge(arrA.concat(arrB))); 
      } else {
        newArray.push(arrB.shift()); 
        return newArray.concat(onMerge(arrB.concat(arrA))); 
      }
    } 
  }