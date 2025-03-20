// After ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc123`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const random = new User("random guy", "random@guy.com", "dogsarethebest")

console.log(random.encryptPassword())
console.log(random.changeUsername());

// Now let's see how javascript is doing this behind the scenes, javascript is executing the above code like the code below:

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc123`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const newRandomGuy = new User("New Random Guy", "guy@random.com", "catsarethebest")

console.log(newRandomGuy.encryptPassword())
console.log(newRandomGuy.changeUsername());
