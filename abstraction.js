class Shape {
    constructor (){
        if(new.target == Shape){
            throw new Error("This class cannot be instantiated directory")
        }
    }

    calculateArea(){
        throw new Error("subclass must implemet abstract method")


     }
    }

class Circle extends Shape {
    constructor(redius){
        super()
        this.Radius = redius; 
    }

    // calculateArea(){
    //     return Math.PI * Math.pow(this.Radius , 2)
    // }

}

const circle = new Circle(10)
console.log(circle.calculateArea());
