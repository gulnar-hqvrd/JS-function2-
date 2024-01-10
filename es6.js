// const number = [1,2,3]
// const person = ["gulnar" , "hagverdiyeva" , "gulnar.hagverdiyeva@idda.az"];

// let n1 = number[0]
// let n2 = number[1]
// let n3 = number[2]

// let [d1,d2,d3] = number;
// console.log(d1);
// console.log(d2);
// console.log(d3);

 
// let [firstname , lastname,email] = person
 
// console.log(firstname);
// console.log(lastname);
// console.log(email);


const PersonName = "Gulnar";
const age = 21

const person = {
    firstname :PersonName,
    age: age,
    greed : function (){
console.log((`Hello , my name is ${this.firstname} and my age is ${this.age}`));
    }
}

console.log(person);
person.greed()