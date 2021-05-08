const animal = prompt('What animal is the superhero most similar to?'),
regAnimal = /^[a-zA-Z]{1,20}$/,
regGender = /^$|(\W|^)(female|male)(\W|$)/i,
regAge = /^[1-9][0-9]{0,4}$/g;

if(regAnimal.test(animal)){
 const gender = prompt('Is the superhero male or female? Leave blank if unknown or other.').toLocaleLowerCase();
 if(regGender.test(gender)){
   const age = prompt('How old is the superhero?');
   if(regAge.test(age)){
    if ( gender == "male" && age<18){
      alert(`The superhero name is: ${animal}-boy`);
       }else if(gender == "male" && age >= 18){
        alert(`The superhero name is: ${animal}-man`);
       }else if(gender == "female" && age<18){
        alert(`The superhero name is: ${animal}-girl`);
       }else if(gender == "female" && age >= 18){
        alert(`The superhero name is: ${animal}-woman`);
       }else if(gender == "" && age<18){
        alert(`The superhero name is: ${animal}-kid`);
       }else if(gender == "" && age >= 18){
        alert(`The superhero name is: ${animal}-hero`);
       }
    }else{alert(`Неправильный ввод!
    Перезагрузи страничку и попробуй ещё раз!`);}
   } else{
  alert(`Неправильный ввод!
  Перезагрузи страничку и попробуй ещё раз!`);
 }
}else{
  alert(`Неправильный ввод!
  Перезагрузи страничку и попробуй ещё раз!`);
}

