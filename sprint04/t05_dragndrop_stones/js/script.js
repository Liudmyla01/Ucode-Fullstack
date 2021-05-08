let div = document.querySelectorAll('div');


div.forEach(function(item, i){
  item.addEventListener('click', function(){
    div[i].classList.toggle('border');
    
    if(div[i].classList.contains('border')){
      div[i].setAttribute('draggable','true')
      div[i].addEventListener('dragend', function(e){
        item.style.top = e.pageY + 'px';
        item.style.left = e.pageX + 'px';
      })
    
    }else{
      div[i].removeAttribute('draggable')
    }
  })
})