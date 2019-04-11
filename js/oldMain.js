
// function calculate(numberOne, numberTwo, action){
//     switch(action.toLowerCase()){
//         case 'add':
//             var result = numberOne + numberTwo;
//             console.log("Sum: " + result );
//             return result;
//         case 'sub':
//             var result = numberOne - numberTwo;
//             console.log("Difference: " + result );
//             return result;
//         case 'mul':
//             var result =  numberOne * numberTwo;
//             console.log("Product: " + result );
//             return result;
//         default:
//             console.log("Operation not supported.")
//             return "Operation not supported."
//     }
// }



// calculate(1,6,'Mul');


// let counter =10;

// function counterFunc(c) {
//     setTimeout(function(){
//         console.log("Count::", c--);
//         if(c>0){
//             counterFunc(c);
//         }else {
//         console.log("Completed");
//         }
//     },1000);
// }

// counterFunc(10);



//ternary operator

// let count=2;




// count>5?console.log("greater"):console.log("smaller");

//condition ? if true do this: else do this;

//10 9 8 0;

// var counter = 10;


// function countTo(){

//     setTimeout(function(){

//         if(counter >=0){
//             console.log("Count:: "+ counter--);
//             countTo();
//         }else {
//             console.log("JOB DONE");
//         }
//     },1000)
// }

// countTo(); 


// (function(){
    
// })();


function countDown(time){
    //calculate minutes
    var min = Math.floor(time/60);
    //calculate seconds
    var sec = time - (min*60);
    // var sec = time % 60;

    //time out function with 1 seconds delay
    setTimeout(function() {
        //counting up to zero seconds
        if(time>=0){
            //desired output
            console.log(min + ":"+sec);
            //recursion 
            countDown(--time);
        }else{
            //after the counting is done
            console.log("Finished");
        }
    }, 1000);
}

//calling function with desired time in seconds
//countDown(123);

//returning from function

function mySquareRoot(number){
    var result = number*number;
    // console.log(result);
    return result;
}

// mySquareRoot(5);

var result5 = mySquareRoot(5);
//result5 = result= 25;
// var result5New = result5 *2;


var myStuff = function(){
    return "nice"
}


// var result6= mySquareRoot(6);
// console.log(result5);
// console.log(result6);

// console.log(myStuff())

function myNewFunction(){
    var myString = "Called myNewFunction";
    // return "Called myNewFunction"
    return myString;
}

var refFunc = myNewFunction;
// console.log(refFunc);
// console.log(refFunc());

// refFunc()


// function one(){
//     return function(){
//         // console.log("returned from function one")
//         return function(){
//             return function(){

//             }
//         }
//     }
// }

// one();
// var result = one();
// result();
// one();

// console.log(one());

//select the line(S) and ctrl + / to comment

//object literals

var car = {
    name: 'BMW', //property
    year: 2010,  //property
    madeIn: 'USA', //property
    parts :{
        name: "Engine", //property
        type: "solid",
        condition: "ok",
        renewed: true,
        printDetail: function(){
            console.log("engine detail");
        }
    },
    getDetail: function(){
        //this = car
        console.log(this.name + "was made in "+ this.madeIn + " in " + this.year );
    }, //method
    getMadeIn: function (){
        return this.madeIn;
    } //method
}

//var madein = car.getMadeIn() = car.madeIn = 2010


//to access the object properties and method 
//we use member access operator "." (dot)
// console.log()

console.log(car.name, car.year, car.getDetail());

// console.log(car.name,car.parts);

car.name = "Ramesh";

car['name']="Ram";

car['build'] = 'Metal';
car.hero ="nice";
// console.log(car);

// console.log(car['newProperty']);
// console.log(car.newProperty);


// console.log(car['name']);

var anotherCar =[
    {
    name: "Toyota",
    year: 2010,
    parts : [
        {
            name: "Engine",
            serviced: true
        },
        {
            name: "clutch",
            serviced: false
        }
    ],
    printDetail: function(){
        console.log(name)
    },
    
},
{
    name: "Toyota",
    year: 2010,
    parts : [
        {
            name: "Engine",
            serviced: true
        },
        {
            name: "clutch",
            serviced: false
        }
    ],
    printDetail: function(){
        console.log(name)
    },
    
}]

// console.log(anotherCar[0].parts[1]);


//JSON : Javascript Object Notaion
// var users =[
//     {name: "ram",dob: 1988},
//     {name: "ramesh", dob: 1960},
//     {name: "ramesh", dob: 1960},
//     {name: "ramesh", dob: 1960},
//     {name: "ramesh", dob: 1960},
//     {name: "ramesh", dob: 1960},
//     {name: "ramesh", dob: 1960},
//     {name: "ramesh", dob: 1960}
// ];

var newCar = (function(){
    let count= 0;
    function printDetail(){
        console.log(count);
    }
    return {
        count: count,
        printDetail: printDetail
    }
})();

// newCar.printDetail()

function first(){
    return this;
}

// console.log(newCar.printDetail());

// console.log(first())


// function second(){
//     'use strict';
//     return this;
// }

// console.log(second())

function fullName(){
    console.log(this.fName + ' '+ this.lName);
}


var customerOne ={
    fName: "Ram",
    lName: "Sharma",
    print: fullName
}
var customerTwo ={
    fName: "Ganesh",
    lName: "Acharya",
    print: fullName
}

customerOne.print();
customerTwo.print();