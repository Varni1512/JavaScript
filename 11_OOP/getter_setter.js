class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}varni`
    }

    set password(value){
        this._password = value
    }
}

const varni = new User("v@varni.ai", "abc")
console.log(varni.email);