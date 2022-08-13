// FOR LOOP
function fibs(num){
    let result = [0,1];
    if( num === 0 ) {
        return result.splice(0,1)
    } else if(num === 1){
        return result
    }
    
    for(let i = 2; i <= num; i++){
        result.push(result[Math.abs(i - 1)] + result[Math.abs(i - 2)])
    }
    return result
}


// RECURSIVE 
function fibsRec(num){
    return num <= 1 ? num : fibsRec(num - 1) + fibsRec(num - 2)
}