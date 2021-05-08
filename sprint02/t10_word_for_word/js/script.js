const obj = {
  words: 'newspapers newspapers  books magazines'
};

function addWords(obj, wrds) {
  let oldWords = obj.words.split(' ').filter(e => e.length > 0);
  let newWords = wrds.split(' ');
  oldWords.splice(0, 2, newWords[1]);
  oldWords.push(newWords[0]);
  obj.words = oldWords.join(" ");
};
function removeWords(obj, wrds) {
  let oldWords = obj.words.split(' ');
  oldWords.splice(0, 1);
  oldWords.splice(2,1);
  obj.words = oldWords.join(" ");
};
function changeWords(obj, oldWrds, newWrds) {
  let old = obj.words.split(' ');
  let neww = newWrds.split(' ');
  old.splice(0);
  old.push(neww[0],neww[1]);
  obj.words = old.join(" ");
}


console.log(obj);// {words: "newspapers newspapers  books magazines"}

addWords(obj, 'radio newspapers');
console.log(obj); // {words: "newspapers books magazines radio"}

removeWords(obj, 'newspapers   radio');
console.log(obj); // {words: "books magazines"}

changeWords(obj, 'books radio  magazines', 'tv internet');
console.log(obj); // {words: "tv internet"}