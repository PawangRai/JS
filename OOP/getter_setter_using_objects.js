const User = {
    _email: "apple@google.com",
    _password: "xyzabc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },

    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value
    }

}

const person = Object.create(User) // We are using a factory function to create an instance of the object User.

console.log(person.email);