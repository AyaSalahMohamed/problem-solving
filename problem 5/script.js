function fun(name){
    let result = ""
    if (name === 'Mubashir'){

        result += "Hello, my love !"
    }
    else{
        result += 'Hello,'+ name +'!'
    }
    return result
}
console.log( fun( "Matt" ));
console.log( fun( "Helen" ));
console.log( fun( "Mubashir" ));
