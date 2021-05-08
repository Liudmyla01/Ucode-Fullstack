function* gen(){
    let a = 1;
    while(true){
        let ask = +prompt(`Previous result: ${a}. Enter a new number:`);
        if(isNaN(ask) || ask <= 0){
            yield alert(`Invalid number!`);
        } else{
            a += ask;
            if(ask > 10000){
                ask = 1;
                yield;
            }
            yield ask;
        }
    }
}

let gener = gen();
for (let i = 1; i <= 5; i++) { gener.next();}






// function gen() {
//   let sum = 1;
//   while (true) {
//       let value = +prompt(`Previous result: ${sum}. Enter a new number:`);
//     if(value >10){
//       value = 1;
//     }
//     if (isNaN(value) || value < 0){
//       alert( `Invalid number!`);
//       break; 
//     } 
//      sum += value;
//     }
// }
// let generator = gen();
// generator();



