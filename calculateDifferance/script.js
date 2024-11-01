function calculateDifferance(obj,num){
    let y =0 
    for (i in obj) {
        y += obj[i] 
    }

    return(y-num)
}
console.log(calculateDifferance({"baseball bat": 20},5));
console.log(calculateDifferance({skate: 10,painting:20},19));
console.log(calculateDifferance({skate: 200,painting:200,shoes:1},400));





