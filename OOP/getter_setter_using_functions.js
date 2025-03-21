function User(email, password){
    this._email = email
    this._password = password

    // We can define the same getter and setters in functions as well using the below appraoch, we use the Object.defineProperty() method to pass in our current context, which is this then we write the name of the property for which we want to set getters and setters, then we can do our code implementation.

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },

        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },

        set: function(value){
            this._password = value
        }
    })
}

const pawang = new User("abc@xyz.com", "abcxyz")
console.log(pawang.email);