/* Устанавливаем стартовый индекс слайда по умолчанию: */
let sliderIndex = 1;

/* Вызываем функцию, которая реализована ниже: */
showSlides(sliderIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide(){
    showSlides(sliderIndex +=1);
}
/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function prevSlide(){
   showSlides(sliderIndex -=1);
   
}
/* Устанавливаем текущий слайд: */
function currentSlide(n){
   showSlides(sliderIndex = n);
}
/* Функция перелистывания: */
function showSlides(n){
  /* Обращаемся к элементам с названием класса "item", к картинкам: */
  let slides = document.getElementsByClassName('item');
   /* Проверяем количество слайдов: */
   if(n > slides.length){
      sliderIndex = 1;
      
   }
    if(n < 1){
       sliderIndex = slides.length;
    }
    /* Проходим по каждому слайду в цикле for: */
   for (slide of slides){
      slide.style.display = 'none';
   }
   /* Делаем элемент блочным: */
   slides[sliderIndex - 1].style.display ="block";

}


let autoSlider = setInterval(nextSlide, 3000);



// let stop = document.getElementsByClassName("next")[0];
// stop.addEventListener('click',()=>{
//    clearInterval(autoSlider);});

