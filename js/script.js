/*
Scrivi un programma che esegua un ciclo da 1 a 100
e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice
per i multipli di 3,
per i multipli di 5
e per i valori che sono sia multipli di 3 che di 5
*/


const squareContainer = document.getElementById("square-container");
// console.log(squareContainer);

// Creo il ciclo for 
for (let i = 1; i <= 100; i++){
    let square = document.createElement("div");
    square.classList.add("square");

    // se i è multiplo sia di 3 che di 5 stampa "fizzbuzz"
    if((i % 3 ===0) && (i % 5 ===0)){
        square.append("fizzbuzz");
        square.classList.add("fizzbuzz");

    } else if (i % 3 ===0){
        // se i è multiplo di 3 stampa "fizz"
        square.append("fizz");
        square.classList.add("fizz");

    } else if (i % 5 ===0){
        // se i è multiplo di 5 stampa "buzz"
        square.append("buzz");
        square.classList.add("buzz");
        
    } else {
        square.append(i);
    }
    squareContainer.append(square);

};

// // Creo il ciclo for 
// for (let i = 1; i <= 100; i++) {
//     // console.log("iterazione numero: ", i , squareContainer.innerHTML);
    
//     // se i è multiplo sia di 3 che di 5 stampa "fizzbuzz"
//     if ((i % 3 ===0) && (i % 5 ===0)){
//         squareContainer.innerHTML += "<div class='square fizzbuzz'> fizzbuzz </div>";

        
//     } else if (i % 3 ===0){
//         // se i è multiplo di 3 stampa "fizz"
//         squareContainer.innerHTML += "<div class='square fizz'> fizz </div>";

//     } else if (i % 5 ===0){
//         // se i è multiplo di 5 stampa "buzz"
//         squareContainer.innerHTML += "<div class='square buzz'> buzz </div>";

//     }else {
//         squareContainer.innerHTML += `<div class="square"> ${i} </div>`;
//     }
// };


