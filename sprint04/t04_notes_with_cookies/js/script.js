let counter = 1;

document.getElementById('btnadd').addEventListener('click',
function render(){
let coment = document.getElementById('textCoolies').value;//вытащить значение из текстовой области
   if(coment ===''){
      alert("It's empty. Try to input something in 'Text input'.");
   }else{   
   document.getElementById('resultString').value += "-->" + coment + "\n";//засунуть его в нижнюю
   let date = new Date(Date.now() + 86400e3);//ставим дату до которой нам нужно сохранять куки
       date = date.toUTCString(); 
    document.cookie = `${counter} cookie=${encodeURIComponent(coment)}; expires=${date}`
   counter++;
}})

document.getElementById('btnclear').addEventListener('click',
function(){
   let qw = confirm('Are you sure?');
   if(qw == true){
      document.getElementById('textCoolies').value = "";
      document.getElementById('resultString').value ='';
      CookiesDelete();
   }
}
)
function CookiesDelete() {
	let cookies = document.cookie.split(";");
	for (let i = 0; i < cookies.length; i++) {
		let cookie = cookies[i];
		let eqPos = cookie.indexOf();
		let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
		document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}
}
