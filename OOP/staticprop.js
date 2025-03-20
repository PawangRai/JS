class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    
    // createId(){  The object has access to this method here
    //     console.log(`123`);
    // }

    // Sometimes, we dont want this method to by accessed by every single object that is instantiated by this class. For this, we can use the static keyword.

    static createId(){ // Any extended class of this class will also not have access to this method here
        console.log(`123`);
    }

    // static methods can be used as helper functions for a particular class. 

}

const pawang = new User("Pawang")
pawang.createId() // -> After the method has been declared as static, this will not work. 