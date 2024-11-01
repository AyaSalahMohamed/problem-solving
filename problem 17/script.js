function fun(arr,str){
    let result= 0
    for(i in arr){
        if(arr[i]===str){
            result = i
        }
        
    }
    return result
}
console.log(fun(['hi','edabit','fgh','abc'],'fgh'));
console.log(fun(['Red','blue','Blue','Green'],'blue'))
console.log(fun(['a','g','y','d'],'d'))
