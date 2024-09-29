function fun( age, parent){
    // if (age>= 15 || age < 15 & parent=== true  ){
    //     return true
    // }else{
    //     return false
    // }
    return age>= 15 || age < 15 & parent=== true ? true : false
}
console.log(fun(14,true));
console.log(fun(14,false));
console.log(fun(16,false));
