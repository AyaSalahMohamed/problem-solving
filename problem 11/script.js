function fun(year){
    return  year%100!=0 & year%4==0 ? true : false
}
console.log(fun(1990));
console.log(fun(1924));
console.log(fun(2021));
