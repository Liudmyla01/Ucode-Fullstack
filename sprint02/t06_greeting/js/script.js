let nam = prompt('Напишите своё имя');
let lName = prompt('Напишите фамилию');
let reg =/^\S\D/i;
if((reg.test(nam)) && (reg.test(lName))){
  nam = nam.toLocaleLowerCase();
  lName = lName.toLocaleLowerCase();
  console.log(`Привет, ${nam[0].toLocaleUpperCase()}${nam.slice(1)} ${lName[0].toLocaleUpperCase()}${lName.slice(1)}!`);
  alert(`Привет, ${nam[0].toLocaleUpperCase()}${nam.slice(1)} ${lName[0].toLocaleUpperCase()}${lName.slice(1)}!`);
}else{
  alert('Wrong input!')
}
