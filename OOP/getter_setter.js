// getters and setters are automatically called when we assign values to a property or try to return values. We don't directly access them, instead automatically generated getter and setter methods are called. We can modify getter and setter methods to suit our needs.

class User {
    constructor(email, password){
        this._email = email
        this._password = password
    }

    // get password(){
    //     return this.password.toUpperCase()
    // }

    // set password(value){
    //     this.password = value
    // }
    // The problem with this approach is that the constructor sets the values by calling the setter, that setter keeps calling itself leading to an infinite loop and thus a an error. In order to avoid this error, what we can do set our variables as _password and _email. When our method is actually called, it will call the getter function, not the actual variables itself.

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
}

const pawang = new User("pawang@gmail.com", "abcd1234")
console.log(pawang.password);
console.log(pawang.email);