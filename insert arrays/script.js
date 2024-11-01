function tuckIn(arr1 ,arr2){
    let arr = arr1.concat(arr2) 
    return (arr.sort((a,b) => a-b )  )
}
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIn([15, 150], [45, 75, 35]));
console.log(tuckIn([[1, 2], [5,6]] ,[[3,4]]));
