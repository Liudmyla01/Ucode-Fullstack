let first = prompt('Напишите число для начала диапазона', 1);
let second = +prompt('Напишите число для конца диапазона',100);

function checkDivision(beginRange, endRange){
 
 for(i = beginRange; i <= endRange; i++){ 
   if(i < 1){
     continue;
    }else if((i % 2 == 0) && (i % 3 == 0 )&& (i % 10 == 0)){
      console.log(`${i}  is even, a multiple of 3,  a multiple of 10`);
    }else if((i % 2 == 0) && (i % 10 == 0)){
      console.log(`${i}  is even, a multiple of 10`);
    }else if((i % 3 == 0) && (i % 10 == 0)){
      console.log(`${i}  is a multiple of 3, a multiple of 10`);
    }else if(i % 3 == 0){
      console.log(`${i}  is a multiple of 3`);
    }else if(i % 2 == 0){
      console.log(`${i}  is even`);
    }else if(!(i % 2 == 0) && !(i % 3 == 0)){
      console.log(`${i} - `);
    }
 } 
}
 checkDivision(first, second); 