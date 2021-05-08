const images = document.querySelectorAll('img'),
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8 //через сколько появится картинка
  };
let count = 0,
  counterPage = document.querySelector('.counter');

function countPlus() {
  count++;
  counterPage.innerHTML = `${count} images `
  if(count == images.length ){
  setTimeout(()=>{counterPage.style.background = 'green'},100) 
    setTimeout(()=>{counterPage.style.display = 'none'; },3000)
  }
}
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(enrt => {
    if (!enrt.isIntersecting) return; //если не перешла картинка границу от 0 до 1

    const image = enrt.target;
    const newUrl = image.getAttribute('data');
    image.src = newUrl;
    observer.unobserve(image);//убирает повторное присвоение атрибута(не отрабатывает ф-ция повторной подгрузки изображения)
    countPlus();
  })
}, options);

images.forEach((image) => {
  observer.observe(image)
})

/*   intersectionRatio - сообщает вам, какая часть целевого элемента в настоящее время видна в пределах коэффициента пересечения корня, в виде значения от 0,0 до 1,0.
      isIntersecting - Логическое значение, которое указывает, targetперешел ли элемент в состояние пересечения ( true) или из состояния пересечения ( false). */