//Ejercicio 1

 /*for (let i = 0; i < 11; i++) {
    console.log(i +  " * 5 = " + i*5)
}*/

//Ejercicio 2

/*let verduras = ["Zanahoria","Manzana","Tomate"];
//verduras.length = 3
//      i    =     0            1         2  

for (let i=0; i<verduras.length; i++) {
    console.log("Ingreso al for, i =" + i);
    console.log(verduras[i]);
    console.log("--------")
}*/


//Ejercicio 3: Ciclo de las tablas de multiplicar 1-2-3-4
//For anidados


/*for ( let i = 1; i < 11; i++) {
    console.log("Tabla del " + i);
    //Ciclo del numero que va a multiplicar
    for (let j =1;j<11;j++){
        console.log(i + " * " + j + " = " + i*j)
    }
      
} */

//Ejercicio números primos 

let numero = parseInt(prompt("Ingresa un número"))

if (numero <= 1) {
    console.log("No es primo")
}else{
    for (let i = 2; i < numero; i++){
        console.log(numero + "%" + i +" = "+numero%i)
        if(numero % i == 0){
            console.log("El número "+numero+ " no es primo")}
        else{
            console.log("El número "+numero+ " es primo")
        }
        }
    }
