"use strict";
/* EN ESTE ARCHIVO FIGURAN TODAS LAS ASIGNACIONES DE EVENTOS CON LAS FUNCIONES QUE DESENCADENAN */
//Creamos array que funcionará como base de datos de los cohetes creados
var cohetesBBDD = [];
//Variable global, accesible desde cualquier función
var cohete;
/* ////////// Evento botón crear cohete 1 ////////// */
CREAR_COHETE_1.addEventListener("click", function (e) {
    //Datos del cohete a crear
    var codigo = "32WESSDS";
    var propulsores = [10, 30, 80];
    //Llamamos a la función crear cohete
    crearCohete(codigo, propulsores);
});
/* ////////// Evento botón crear cohete 2 ////////// */
CREAR_COHETE_2.addEventListener("click", function (e) {
    //Datos del cohete a crear
    var codigo = "LDSFJA32";
    var propulsores = [30, 40, 50, 50, 30, 10];
    //Llamamos a la función crear cohete
    crearCohete(codigo, propulsores);
});
/* ////////// Evento botón acelerar cohete 1 ////////// */
ACELERAR_COHETE_1.addEventListener("click", function (e) {
    //Llamamos a la función de acelerar cohete
    acelerarCohete("32WESSDS");
});
/* ////////// Evento botón acelerar cohete 2 ////////// */
ACELERAR_COHETE_2.addEventListener("click", function (e) {
    //Llamamos a la función de acelerar cohete
    acelerarCohete("LDSFJA32");
});
/* ////////// Evento botón frenar cohete 1 ////////// */
FRENAR_COHETE_1.addEventListener("click", function (e) {
    frenarCohete("32WESSDS");
});
/* ////////// Evento botón frenar cohete 2 ////////// */
FRENAR_COHETE_2.addEventListener("click", function (e) {
    frenarCohete("LDSFJA32");
});
/* ////////// Evento botón imprimir cohete 1 ////////// */
IMPRIMIR_COHETE_1.addEventListener("click", function (e) {
    var index;
    //Miramos si hay cohetes creados
    if (cohetesBBDD.length === 0) {
        alert("¡No se ha creado ningún cohete!");
    }
    else {
        //Llamamos a una función para buscar el cohete en el array, nos devolverá el índice
        index = buscarCohete("32WESSDS");
        //Si el índice es -1, significa que no hemos encontrado el objeto 
        if (index === -1) {
            alert("El cohete no existe.");
        }
        else { //Si no, le pasamos el objeto a mostrarCohetes
            mostrarUnCohete(cohetesBBDD[index]);
        }
    }
});
/* ////////// Evento botón imprimir cohete 2 ////////// */
IMPRIMIR_COHETE_2.addEventListener("click", function (e) {
    var index;
    //Miramos si hay cohetes creados
    if (cohetesBBDD.length === 0) {
        alert("¡No se ha creado ningún cohete!");
    }
    else {
        //Llamamos a una función para buscar el cohete en el array, nos devolverá el índice
        index = buscarCohete("LDSFJA32");
        //Si el índice es -1, significa que no hemos encontrado el objeto 
        if (index === -1) {
            alert("El cohete no existe.");
        }
        else { //Si no, le pasamos el objeto a mostrarCohetes
            mostrarUnCohete(cohetesBBDD[index]);
        }
    }
});
/* ////////// Evento botón imprimir todos los cohetes ////////// */
IMPRIMIR_ALL_COHETES.addEventListener("click", function (e) {
    //Miramos si hay cohetes creados
    if (cohetesBBDD.length === 0) {
        alert("¡No se ha creado ningún cohete!");
    }
    else {
        mostrarCohetes();
    }
});
