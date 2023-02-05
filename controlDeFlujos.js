function viajar(destino){
    if(destino === "Brasil"){
        console.log("Gire a la izquierda");
    }else if (destino === "Argentina"){
        console.log("Gire a la derecha");
    }else{
        console.log("Nos perdimos");
    }
} 
viajar("Brasil");
viajar("Argentina");
viajar("Peru");

function puedeManejar(edad){
    if(edad >= 18){
        console.log("Usted es mayor de edad");
    }else{
        console.log("Usted es menor de edad");
    }
}

puedeManejar(15);