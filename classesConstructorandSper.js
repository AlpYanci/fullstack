// classes
// js was no officail classes and 
// func metot and that func object..
// whene you create an object, the prorortyor object also created behind the scene..

// function Holiday(destination,days){
//     this.destination = destination
//     this.days = days
// }
// Holiday.prototype.info = function(){
//     console.log(this.destination + ' | '+ this.days + ' days ');
// }
// var nepal = new Holiday('nepal','30');
// console.log(nepal.info());

//new way E6

// class Holiday{
//     constructor(destination,days){
//         this.destination = destination;
//         this.days=days;
//     }
//     info(){
//         console.log(`${this.destination} will take ${this.days} days`);
//     }

// }
// const trip = new Holiday("anakra",3);
// console.log(trip.info());

//super clalss
class Holiday{
    constructor(destination,days){
        this.destination = destination;
        this.days=days;
    }
    info(){
        console.log(`${this.destination} will take ${this.days} days`);
    }

}

// sub class

class Expedition extends Holiday{
    constructor(destination,days,gear){
        super(destination,days)
        this.gear = gear;
    }
    info(){
        super.info();
        console.log(`bring your ${this.gear.join("and your")}`)
    }
}

const tripWithGear = new Expedition("everst","30",["sunglasses","flags","camera"]);

tripWithGear.info();