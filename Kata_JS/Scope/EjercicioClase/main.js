let num1 = 10
let num2 = 15
let num3 = 20

function global(){
   console.log(num1+num2+num3)

}

function local() {
    let num4 = 1
    let num5 = 2
    
    let suma = num4+num5

    console.log(suma)
    
}