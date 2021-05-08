function concat(string1, string2){ 
  if (string1 && string2){
     return  string1.concat(" " + string2)
  } else  { function counter(){
  counter.count++ 
  return string1 + " " + prompt('Please write something') 
   }
  counter.count = 0;
return counter;   
}

  }

let phrase1 = concat("Hulk", "smash!");
let output = phrase1;
console.log(output); 

let phrase2 = concat("Leave");
output = phrase2();
console.log(output); 
console.log(phrase2.count);

output= phrase2();

console.log(output); 

output= phrase2();

console.log(output); 
console.log(phrase2.count);

let phrase3= concat("Go");
output= phrase3();

console.log(output); // Go away!
console.log(phrase3.count); // 1
console.log(phrase2.count);