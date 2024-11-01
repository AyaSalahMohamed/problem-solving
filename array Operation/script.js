function arrayOperation(start,end,num){
    let nums=[]
    for(let i=start; i<= end ;i++){
        if(i % num==0){
            nums.push(i)
        }

    }
    return nums

}
console.log(arrayOperation(1, 10, 3));
console.log(arrayOperation(7, 9, 2));
console.log(arrayOperation(15, 20, 7));
