



function incrementItems(array){
    let newarray=[]
    for (let i of array) {
        i+=1
        newarray.push(i)

        
        
    }
    return newarray
}

console.log(incrementItems([0, 1, 2, 3]) );


console.log(incrementItems([2, 4, 6, 8]));
 

console.log(incrementItems([-1, -2, -3, -4]) );



