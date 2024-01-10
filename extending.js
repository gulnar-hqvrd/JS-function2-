// class Animal{
//     constructor(name){
//         this.Name = name;
//     }

//     speak = ()=> console.log(`${this.Name} makes a noise`);
// }


// class Dog  extends Animal{
//     constructor (name , breed){
//         super(name); //extends aldigimiz yerin constructorini cagirir
//         this.Breed = breed
//     }

//     bark = () => console.log(`The ${this.Breed} barks`);

// }

// const myDog = new Dog ("Kara" , "Balam")
// myDog.speak()
// myDog.bark()


class Employee {

    constructor (firstname  , lastname , email , phone , salary){
        this.Firstname = firstname;
        this.Lastname = lastname;
        this.Email = email;
        this.Phone = phone;
        this.Salary = salary;
    }
}

class Worker extends Employee{
    constructor (firstname  , lastname , email , phone , salary , departament ){
        super(firstname  , lastname , email , phone , salary)
        this.Departament = departament;

    }

}

class Manager extends Employee{

    
    constructor (firstname  , lastname , email , phone , salary , departament , reports){
        super(firstname  , lastname , email , phone , salary)
        this.Departament = departament;
        this.Reports = reports;

    }
    
}

class Directory extends Employee{

    constructor (firstname  , lastname , email , phone , salary , departament , reports , bonus){
        super(firstname  , lastname , email , phone , salary)
        this.Departament = departament;
        this.Reports = reports;
        this.Bonus = bonus;

    }
    
}

const worker = new Directory("Gulnar" , "Hagverdiyeva" , "asasas" , 23244454 , 3000, "IT" , "NO" , 100)
console.log(worker);