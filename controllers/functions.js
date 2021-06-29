"use strict";
/* //////////////////////// EN ESTE ARCHIVO FIGURAN TODAS LAS FUNCIONES //////////////////////// */
/* ////////// Creamos objeto Cohete ////////// */
function crearCohete(codigo, propulsores) {
    var index;
    //Llamamos a una función para buscar el cohete en el array, nos devolverá el índice
    index = buscarCohete(codigo);
    //Si el índice NO es -1, significa que el objeto ya existe 
    if (index != -1) {
        alert("El cohete ya existe.");
    }
    else { //Si no, creamos el objeto
        //Creamos el nuevo objeto Cohete
        cohete = new Cohete(codigo, propulsores);
        //Añadimos el objeto a nuestro array BBDD
        cohetesBBDD.push(cohete);
    }
}
/* ////////// Buscamos cohete en el array, devolvemos el índice ////////// */
function buscarCohete(codigo) {
    var index = -1;
    //Recorremos el array de objetos y si encontramos el objeto buscado asignamos su indice a index
    for (var i = 0; i < cohetesBBDD.length; i++) {
        if (codigo == cohetesBBDD[i].codigo) {
            index = i;
        }
    }
    //Devolvemos el index
    return index;
}
/* ////////// Mostramos un objeto cohete especifico ////////// */
function mostrarUnCohete(cohete) {
    //Variables a usar
    var p;
    //Limpiamos container
    CONTAINER.innerText = "";
    //Creo un parágrafo
    p = document.createElement("h5");
    //Le añado los datos
    p.innerText = "COHETE " + cohete.codigo + ": " + cohete.propulsores + " Potencia máxima: " + cohete.potenciaMaximaCohete + " - " + " Potencia propulsores actual: " + cohete.potenciaPropulsoresActual + " Potencia total actual del cohete: " + cohete.potenciaTotalActual;
    //Lo añado al container
    CONTAINER.append(p);
}
/* ////////// Mostramos objetos Cohetes ////////// */
function mostrarCohetes() {
    //Variables a usar
    var p;
    //Limpiamos container
    CONTAINER.innerText = "";
    //Recorremos el array de cohetes
    cohetesBBDD.forEach(function (cohete) {
        //Creo un parágrafo
        p = document.createElement("h5");
        //Le añado los datos
        p.innerText = "COHETE " + cohete.codigo + ": " + cohete.propulsores + " Potencia máxima: " + cohete.potenciaMaximaCohete + " - " + " Potencia propulsores actual: " + cohete.potenciaPropulsoresActual + " Potencia total actual del cohete: " + cohete.potenciaTotalActual;
        //Lo añado al container
        CONTAINER.append(p);
    });
}
/* ////////// Fes una funció que calculi la potència màxima del coet (serà el sumatori de les potències màximes dels propulsors) ////////// */
function calcularPotenciaMaxima(propulsores) {
    var potenciaMaximaCohete = 0; //Esta variable será la potencia máxima del cohete, el sumatorio de las potencias máximas de los propulsores
    //Usamos el método reduce
    potenciaMaximaCohete = propulsores.reduce(function (total, currentValue) {
        return total += currentValue;
    });
    //Devolvemos el total
    return potenciaMaximaCohete;
}
/* ////////// Aceleramos cohete ////////// */
function acelerarCohete(codigo) {
    var index;
    //Miramos si hay cohetes creados
    if (cohetesBBDD.length === 0) {
        alert("¡No se ha creado ningún cohete!");
    }
    else {
        //Llamamos a una función para buscar el cohete en el array, nos devolverá el índice
        index = buscarCohete(codigo);
        //Si el índice es -1, significa que no hemos encontrado el objeto 
        if (index === -1) {
            alert("El cohete no existe.");
        }
        else { //Si no, aceleramos el cohete
            cohetesBBDD[index].acelerar();
        }
    }
}
/* ////////// Frenamos cohete ////////// */
function frenarCohete(codigo) {
    var index;
    //Miramos si hay cohetes creados
    if (cohetesBBDD.length === 0) {
        alert("¡No se ha creado ningún cohete!");
    }
    else {
        //Llamamos a una función para buscar el cohete en el array, nos devolverá el índice
        index = buscarCohete(codigo);
        //Si el índice es -1, significa que no hemos encontrado el objeto 
        if (index === -1) {
            alert("El cohete no existe.");
        }
        else { //Si no, frenamos el cohete
            cohetesBBDD[index].frenar();
        }
    }
}
