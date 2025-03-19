let myName = "Pawang         "; // Lets say this is our string with some whitespaces, we want to find the true length of this string, but we dont have any sort of property or method like that. We can create our own methods and inject them in the String Object.

// console.log(myName.trueLength());

let myHeros = ["Thor", "Batman"];

let heroPower = {
  thor: "Hammer",
  batman: "Wealth",

  getBatmanPower: function () {
    console.log(`Batman's power is ${this.batman}`);
  },
};

// heroPower.turnEvil();  -> This function does not exist, but we can inject it ourselves

// What we can do is instead of injecting it in the heroPower object, we can instead, inject it in the Object which is original Object so that way whatever further objects are created, all will have the turnEvil() method

Object.prototype.turnEvil = function () {
  console.log("Everyone has the ability to go rogue");
};

heroPower.turnEvil();

// Because Strings, Arrays and Functions are also under the hood, an Object, this method is also available in Strings, Arrays and Functions.

myHeros[0].turnEvil() // -> This is also working

// But if we inject a method in let's say String, then that method will not be available in Objects because Strings aren't inherently objects. Refer to the diagram in notes.md for further info

// inheritance 

// If we want to somehow combine the properties of the object below, then we can do that with prototype

const User = {
    name: "randomguy",
    email: "randomguy@example.com"
}
const Teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignments",
    isFullTime: true,
    __proto__: teachingSupport // -> Now TASupport has the properties of teachingSupport and if we create objects of TASupport with the new keyword, it will have properties of the teachingSupport as well
}

// We can do this in some other way like below
Teacher.__proto__ = User

// A modern approach is as follows: 
Object.setPrototypeOf(teachingSupport, Teacher) // This means teachingSupport will now inherit from Teacher

// This is what is called as prototypal inheritance

let anotherUserName = "Someguyname           "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"Pawang Rai Lohana".trueLength()
