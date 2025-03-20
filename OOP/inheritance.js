class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

// Now we can inherit this user to other classes as well

class Teacher extends User {
    constructor(username, email, password){
        super(username) // We can directly use the super keyword to call the parent classes' contructor instead of having to use the call() method and passing in the our current execution context.

        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course has been added by ${this.username}`);
    }
}

const teacher1 = new Teacher("teach", "teach@teachers.com", "12345")
teacher1.logMe() // -> This is working fine as we have inherited the user class in the teacher class so it has access to all the properties of the user class.
teacher1.addCourse() 

const pawang = new User("pawang")
// pawang.addCourse() pawang being instance of Object does not have access to addCourse() which is a method of Teacher

console.log(pawang === teacher1); // This shows that the objects are not equal

// There is a better method of comparing objects called instanceOf which shows if the object is the instance of that class

console.log(teacher1 instanceof Teacher); // -> This returns true
console.log(pawang instanceof User); // -> This is also true

console.log(teacher1 instanceof User); // -> This is also true as teacher1 is instace of Teacher and Teacher has inherited properties from the User so this is also correct.
