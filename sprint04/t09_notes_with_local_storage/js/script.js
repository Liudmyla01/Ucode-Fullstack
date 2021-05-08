let counter = 1;

document.getElementById('btnadd').addEventListener('click',
function(){
let coment = document.getElementById('textCoolies').value;//вытащить значение из текстовой области
   if(coment ===''){
      alert("It's empty. Try to input something in 'Text input'.");
   }else{ 
     let date = new Date(Date.now() );//ставим дату до которой нам нужно сохранять куки
       date = date.toUTCString();    
   document.getElementById('resultString').value += "-->" + coment + " " + date + "\n";//засунуть его в нижнюю
   
   localStorage.setItem(counter, coment) ; ;
    counter++;
}})

document.getElementById('btnclear').addEventListener('click',
function(){
   let qw = confirm('Are you sure?');
   if(qw == true){
      document.getElementById('textCoolies').value = "";
      document.getElementById('resultString').value ='';
      localStorage.clear()
   }
}
)