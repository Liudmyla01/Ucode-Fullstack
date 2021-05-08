function HouseBuilder(address, description, owner, size,roomCount) {
  this.address = address;
  this.description = description;
  this.owner = owner;
  this.size = size;
  this._building_speed = 0.5;
  this. roomCount = roomCount;
  this.date = new Date;//стандартный метод у обьекта toDateString()
  this.__proto__= houseBlueprint;
}

let houseBlueprint = {
  address:this.address,
  description: this.description,
  owner: this.owner,
  size:this.size,
 getDaysToBuild: function (){
   return this.size / this._building_speed
  }
}