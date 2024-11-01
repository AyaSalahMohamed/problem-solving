




// let array = [1, 2, 3, 4, 5];
// let max = Math.max(...array);
// let min = Math.min(...array);
// console.log("Max:", max);
// console.log("Min:", min)




function maxmin(arr){
    let newarray=[]
    let min =Math.min(...arr)
    newarray.push(min)
    let max =Math.max(...arr)
    newarray.push(max)
    return newarray
}


console.log(maxmin([1, 2, 3, 4, 5])); 



console.log(maxmin([2334454, 5]) );



console.log(maxmin([1]) );




