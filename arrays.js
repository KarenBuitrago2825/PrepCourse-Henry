var listaDeCompras =[];

//Agregar elementos
listaDeCompras[1]= "Lechuga";
listaDeCompras[3]= "Tomates";
console.log(listaDeCompras);

//Acceder elementos
var elementoDelArray=listaDeCompras[1];
console.log(elementoDelArray);

//Metodo length
console.log(listaDeCompras.length);

//Metodo push -> añadir al final
var colores =["amarillo", "azul"];
colores.push("rojo");
console.log(colores)

//Metodo unshift -> añadir al principio
colores.unshift("verde");
console.log(colores);

//Metodo pop -> eliminar ultimo dato
colores.pop();
console.log(colores);

//Metodo shift -> eliminar el primer dato
colores.shift();
console.log(colores);

//Metodo includes
var pintores= ["Picazzo", "Velazquez", "Van gogh", "Dali"];
var incluyeDali = pintores.includes("Dali");
console.log(incluyeDali);

//Metodo every
var numero =[7, 6, 8, 9];
var cumplenCondicion = numero.every((num) => {
    return num>5;
});

//Metodo split
var palabra = "Henri";
var palabraSeparada = palabra.split("");
palabraSeparada.pop();
palabraSeparada.push("y");
var palabraCorrecta= palabraSeparada.join("");
console.log(palabraCorrecta);

//Metodo forEach
var datos = [1, 2, 3, 4];
datos.forEach((num)=>console.log(num));

datos.forEach((num)=>{
if(num ===3){
    console.log(num)
    }
});

//Metodo map 
var sumaMasUno = datos.map(num =>{return num + 1});
console.log(sumaMasUno);

//Bucles for con array
var arr = [1, 2, 3, 4, 5];
for(var i = 0; i < arr.length; i++){
    console.log([i]);
}

//Con funciones
function encontrarLetra(string){
    var letras = string.split("");
    for(var i =0; i < letras.length; i++){
       if (letras[i]==="p"){
        console.log("Si existe la letra P");
        letras.join("");
       }
    }
}
encontrarLetra("JavaScript");

//Bucle while con array
var arrUno =[];
while(arrUno.length<5){
    arrUno.push("BOOM");
}

console.log(arrUno);