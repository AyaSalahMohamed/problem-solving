function fun(arr){
    result = []
    for(i of arr){
        result.push(typeof(i))
    }
    return result
}
console.log(fun([1,2,'null',[]]));
console.log(fun('214',true,false,2,2.15,[],null))