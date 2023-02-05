
function sumaTres (x){
    console.log(x + 3);
}

sumaTres(5);
//Estructura: function + nombre de la función + (parametro){Cuerpo de la función}

//Forma Uno
function sumaCuatro (x){
    return x + 4;
}

//Forma Dos
var sumaCinco = function (x){
    return x + 5;
};

// Forma Tres
var sumaSeis = (x) => {
    return x + 6;
}

function mayorYMenor(num){
    if (num > 5 && num<10 && num %2 ==0)
    {
        console.log (true);
    }else{
        console.log (false);
    }
} 
mayorYMenor(6);

function operadorOr(str){
    if(str === "Henry" ||  str.length < 2 ){
        console.log(true);
    }else {
        console.log(false);
    }
} 
operadorOr("Henry");

function negacion (permiso){
    if (permiso !== true) {
        console.log("Tiene permiso");
    }
}

negacion(false);

function condicionCompleja(num){
    if (num > 9 && num % 2 ===0 || num === 3){
        console.log(true);
    }else{
        console.log(false);
    }
}
condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);

