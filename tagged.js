function myTag (strigs , ...values){
    console.log(strigs)
    console.log(values);
    // console.log(strigs[0] + values[0] + strigs[1] + values[1]+ strigs[2] + values[2] + strigs[3])

   let result = "";
   for(let i = 0 ;  i <strigs.length; i++){
    result+=strigs[i];
    if(i <values.length){
        result+=values[i]
    }
   }
   return result
}


const firstname = "Gulnar"
const surname = "Hagverdiyeva";
const age = 21

let result = myTag`My name is ${firstname} ${surname} and i am ${age} years old`;
console.log(result);