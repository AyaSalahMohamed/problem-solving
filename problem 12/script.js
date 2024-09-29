let area = 0
function fun(base,height,shape){
    if(shape === 'triangle'){
        area= 0.5 * base * height
    }
    else if(shape === 'parallelogram'){
        area=  base * height
    }
    return area

}
console.log(fun(2,3,'triangle'));
console.log(fun(8,6,'parallelogram'))
console.log(fun(2.9,1.3,'parallelogram'))
