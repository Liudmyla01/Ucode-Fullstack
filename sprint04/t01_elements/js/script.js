 let a = document.querySelectorAll("li");
 
 for (i = 0; i < a.length; i++){
    let clas = a[i].getAttribute("class");
   if (!clas  || (clas != "good" && clas != "evil" && clas != "unknown")){
       a[i].setAttribute("class","unknown"); }
    a[i].append(document.createElement('br')); 
 let dataElement = a[i].getAttribute('data-element');
 if(!dataElement){ a[i].setAttribute('data-element', 'none'); }
dataElement = a[i].getAttribute('data-element').split(" ");

for(k = 0; k < dataElement.length; k++){
   let dav = document.createElement('div');
   dav.className = `elem ${dataElement[k]}`
   a[i].append(dav);
if(dataElement[k] == "none"){
   let dib = document.createElement('div');
   dib.className = `line`
   dav.append(dib);  
}
}
}

