


function fun(arr){
    let result = 0
    
    for(let i of arr){
        result+=i

    }
    if(result%arr.length===0){

        return true
    }
    else{
        return false
}
    
}
console.log(fun([1,3]));
console.log(fun([1,2,3,4]));
console.log(fun([1,5,6]));
console.log(fun([1,1,1]));
console.log(fun([9,2,2,5]));




