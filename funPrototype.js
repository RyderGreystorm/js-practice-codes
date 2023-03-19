class Person {
    constructor (fName, lName){
        this.firstName = fName;
        this.lastName = lName;
    }
    sayMyName(){
        return this.firstName + ' ' + this.lastName;
    }
}

const me = new Person('Bruce', 'Wayne')
console.log(me.sayMyName())

class superHero extends Person {
    constructor(fName, lName){
        super(fName,lName)
        this.isSuperHero = true;
    }
    fightCrime(){
        console.log("Fights Crimes")
    }
}

const batman = new superHero('Bruce', 'Ryder Greystorm')
console.log(batman.sayMyName())

