function fun(person){
    result="Luke, I am your "
    if(person ==="Darth Vader"){
        result += "father ."
    }
    if(person ==="Leia"){
        result += "sister ."
    }
    if(person ==="Han"){
        result += "brother in law ."
    }
    if(person ==="R2D"){
        result += "driod"
    }
    return result

}
console.log(fun("Darth Vader"));
console.log(fun("Leia"));
console.log(fun("Han"));
