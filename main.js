import './style.css'

/* Desafio 08 – JavaScript Intro - JS */

/* 1. Debes crear las variables nombre, apellido, edad, pais y conocimientos, esta última deberá ser un array.
- Mostrar todos los valores de las variables por la consola. Los elementos del array mostrarlos en forma manual.
- Después cambia el valor de edad y añade un nuevo element al array.
- Muestra esos nuevos valores por la consola. */

console.log('--------------------------EJERCICIO 1')
let nombre = 'Leonel'
let apellido = 'Suarez'
let edad = '19'
let pais = 'Argentina'
let conocimientos = ['java script', 'html', 'css']
console.log(`nombre: ${nombre}` + '\n' + `apellido: ${apellido}` + '\n'
    + `edad: ${edad}` + '\n' + `pais: ${pais}` + '\n' + `conocimientos: ${conocimientos}`
)
edad = '20'
conocimientos.push('react')

console.log(`nombre: ${nombre}` + '\n' + `apellido: ${apellido}` + '\n'
    + `edad: ${edad}` + '\n' + `pais: ${pais}` + '\n' + `conocimientos: ${conocimientos}`
)

/* 2. Debes crear las variables marca, velocidad, stock y modelos (array)
- Todas esas variables deberán ser mostradas por pantalla (con una frase) [Usar template strings]
- Debes mostrar cada uno de los elementos del array (sin hacerlo manualmente) */

console.log('--------------------------EJERCICIO 2')
let marca = "Toyota";
let velocidad = 180; 
let stock = 20;
let modelos = ["Corolla", "Yaris", "Hilux", "RAV4"];


console.log(`La marca es: ${marca}`);
console.log(`La velocidad máxima es: ${velocidad} km/h`);
console.log(`El stock disponible es de: ${stock} vehículos`);
console.log("Los modelos disponibles son:");


modelos.forEach((modelo) => {
    console.log(modelo);
});

/* 3. Un coche va a toda velocidad por la carretera. Va a una velocidad de 135km/h y el limite es de 60km/h
- Comprueba que si la velocidad es mayor al limite.
- Si es mayor debes mostrar un mensaje por la consola indicando que baje la velocidad.
- Si es menor el mensaje deberá ser que todo va bien.
 */

console.log('--------------------------EJERCICIO 3')
velocidad = 135

if(velocidad > 60){
    console.log('deberias bajar la velocidad')
} else{
    console.log('todo va bien!!')
}

/* 4. Dado un sueldo, crear una condicional comparando su sueldo.
- Si el sueldo es $100.000 es excelente
- Si el sueldo es menor o igual a $80.000 es muy bueno.
- Si el sueldo es menor o igual a $60.000 es bueno.
- Y si el sueldo es menor o igual a $40.000 es bajo. */

console.log('--------------------------EJERCICIO 4')
let sueldo = parseInt(prompt('ingrese su sueldo:'))

if (sueldo > 100000) {
    console.log('Su sueldo es excelente')
} else if (sueldo <= 100000 && sueldo > 80000) {
    console.log('Su sueldo es muy bueno')
} else if (sueldo <= 80000 && sueldo > 60000) {
    console.log('Su sueldo es bueno')
} else if (sueldo <= 60000 && sueldo > 40000) {
    console.log('Su sueldo es bajo')
} else {
    console.log('Su sueldo es muy bajo')
}

/* 5. Pidele al usuario su año de Nacimiento (ej: 1990) en una ventana emergente (prompt) y calcula cuántos años tiene actualmente. */

console.log('--------------------------EJERCICIO 5')
let fechaNacimiento= prompt('porfavor ingresa el año en el que naciste:')

let calcularEdad = (fecha) =>{
    fecha = fechaNacimiento
    console.log(`Tu edad es: ${2024 - fecha} años`)
}

calcularEdad()

/* 6. Crear una función en JavaScript que reciba como parámetro un número entero. Calcule y muestre en la consola la tabla de multiplicar de ese número desde 1 hasta 10. 

-- como ser vería en consola -> calcularTabla(2) -> Se utiliza un for
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
 */

console.log('--------------------------EJERCICIO 6')

function CalcularTabla () {
    let numero = prompt('ingrese un numero para saber su tabla del 1 al 10')

for(let i = 0; i < 11; i++){
    if(i != 0){
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}
}

CalcularTabla()

/* 7. Crea una función que devuelva si un número (pasado por el usuario es par o impar)
Muestra el resultado por consola y un alert. */

console.log('--------------------------EJERCICIO 7')

function paridad () {
    let numero = prompt('ingrese un numero')

    if (numero % 2 != 0){
        console.log('El numero que ingreso es impar')
    } else {
        console.log('El numero que ingresoes par')
    }
}

paridad()



