class Animal{
    speaak(){ console.log("Animal speaks");}
}


class Dog{
    speaak(){ console.log("Dog speaks");}
}


class Cat extends Animal{
    // speaak(){ console.log("Cat speaks");}
}


const dog = new Dog()
const cat = new Cat()

dog.speaak()
cat.speaak()