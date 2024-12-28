
var num1=100
var num2=50
//_______________FAMILIAR OPERATORS_______________

var addition= num1 + num2
var subraction=num1-num2
var multiplying=num1*num2
var divide =num1/num2
// Modulus reminder data hai
// divide kerny ky baad jo value bachy woh reminder hoti hai/deta hai 
// // 7/5=2 reminder hai
// even or odd number check kersakty hain 
// ksi bhi number ko 2 se divide kerdo
// agr 0 bache to wo even he or 1 bachy to odd 
var modulus = 545 % 2 
var exponentiation=5**3 //5*5*5

// alert(addition)
// alert(subraction)
// alert(multiplying)
// alert(divide)

// console hum use kerty hain console mein ouput or result ko dekhny ky lyee
console.log(addition) //150
console.log(subraction) //50
console.log(multiplying) //5000
console.log(divide)
console.log(modulus)
console.log(exponentiation)


// BODMAS RULE APPLY
// Bracket open,Division,Multiplication
// //Addition or Subtraction mein left se jo pahly ayga wo apply hoga.

//VAR MEIN NUMBER SIRF START MEIN NHI ASKTA...
var bod1 = multiplying/subraction+addition //5000/50=100+150=250


var bod2 = multiplying/(subraction + 10)
var bod3= multiplying+subraction*modulus
console.log(bod1)
console.log(bod2)
console.log(bod3)


//_____________UNFAMILIAR OPERATORS________________ used in Javascript.
//increment ky lye use kerty hain ++
//decrement ky lye use kerty hain --

// post increment/decrement (Baad mein)
//num++,num--
//hm jahan per call kerty hain 
//twe new variable ko pahly value assign hoti hai phir update hoti hai..

// pre increment/decrement (First mein)
//++num,--num
////hm jahan per call kerty hain 
//twe pahly value update hoti hai phir assign hoti hai..

// POST INCREMENT EXAMPLE:
var piNum=10
var piNumAfter=piNum++
console.log(piNum) //11
console.log(piNumAfter) //10

// POST DECREMENT EXAMPLE:
var pdNum=10
var pdNumAfter=pdNum--
console.log(pdNum) //9
console.log(pdNumAfter)//10

// PRE INCREMENT EXAMPLE:
var priNum=10
var priNumAfter= ++priNum
console.log(priNum) //11
console.log(priNumAfter) //11 

// PRE DECREMENT EXAMPLE:
var prdNum=10
var prdNumAfter= --prdNum
console.log(prdNum) //9
console.log(prdNumAfter) //9