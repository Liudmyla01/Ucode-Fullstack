let houseMixin = {
  wordReplace: function (old, newWrd) {
    return house.description = this.description.replace(old, newWrd);
  },
  wordInsertAfter: function (old, wrd) {
    let oldWords = this.description.split(' ');
    let a = oldWords.indexOf(old);
    oldWords.splice(a, 0, wrd);
    return this.description = oldWords.join(' ')
  },
  wordDelete: function (old) {
    return house.description = this.description.replace(old, '');
  },
  wordEncrypt: function () { 
      var re = /[a-z]/i;
      var min = 'A'.charCodeAt(0);
      var max = 'Z'.charCodeAt(0);
      var factor = 13;
      var result = "";
      str = this.description.toUpperCase();
      
      for (var i=0; i <str.length; i++) {
        result += (re.test(str[i]) ?
          String.fromCharCode((str.charCodeAt(i) - min + factor) % (max-min+1) + min) : str[i]);
      }
        return house.description = result.toLowerCase();
    
  },
  wordDecrypt: function () {
    return house.description = house.wordEncrypt();
   }
}

const house = new HouseBuilder('88 Crescent Avenue', 'Spacious town house with wood flooring, 2-car garage, and a back patio.', 'J. Smith', 110, 5);
Object.assign(house, houseMixin);
console.log(house.getDaysToBuild());
//220
console.log(house.description);
// Spacious town house with wood flooring, 2-car garage, and a back patio.
(house.wordReplace("wood", "tile"));
console.log(house.description);
// Spacious town house with tile flooring, 2-car garage, and a back patio
house.wordDelete("town ");
console.log(house.description);
// Spacious house with tile flooring, 2-car garage, and a back patio
house.wordInsertAfter("with", "marble");
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.
house.wordEncrypt();
console.log(house.description);
// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.
house.wordDecrypt();
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio

/* доп метод кодирования
wordEncrypt() {
        // let code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'.split("");
        let code = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'];
        // this.description = this.description.split("").map(e => code.includes(e) ? code[code.indexOf(e) + 13] : e).join("");
        this.description = [...this.description].map(e => code.includes(e) ? code[code.indexOf(e) + 13] : e).join("");
    },
*/