/*Task name: Tower*/
class Building{
  hasElevator;
  arcCapacity;
  height;
constructor(floors, mater, adress){
    this.floors = floors;
    this.material = mater;
    this.adress = adress
  }
   getFloorHeight(){ return this.height/this.floors }

   toString(){
    return`
    Floors: ${this.floors}
    Material: ${this.material}
    Address: ${this.adress}
    Elevator: ${this.hasElevator ? "+" : '-'}
    Arc reactor capacity: ${this.arcCapacity}
    Height:${this.height}
    Floor height: ${this.getFloorHeight()}
    `
  }
}

class Tower extends Building{
  constructor(floors, mater, adress){
    super(floors, mater, adress);  
  }
}
const starkTower = new Tower(93, 'Different', 'Manhattan, NY');
starkTower.hasElevator= true;
starkTower.arcCapacity= 70;
starkTower.height= 1130;
console.log(starkTower.toString());