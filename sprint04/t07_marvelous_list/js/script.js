const filmName = document.querySelectorAll('.filmName'),
      content = document.querySelectorAll('.content'),
      filmsPerent = document.querySelector('.films');

function noneContent(){
      content.forEach(item =>{
        item.style.display = 'none';
      });
    filmName.forEach(name =>{
        name.classList.remove('active')
    })
}
function showContent(i = 0){
  content[i].style.display = 'block';
  filmName[i].classList.add('active'); 
}
noneContent();
showContent();

filmsPerent.addEventListener('click',(e)=>{
  const tar = e.target;
  if(tar && tar.classList.contains('filmName')){
    filmName.forEach((item, i)=>{
        if(tar === item){
          noneContent();
          showContent(i);
        }
    })
  }
})