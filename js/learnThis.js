//this and global
var car ={
    name: "BMW",
    year: 2015,
    printDetail: function(){
        console.log(this.name + this.year);
    }
}


function fullName(){
    var fullName= this.fName + " " + this.lName;
    // return fullName
    console.log(this.fName + " " + this.lName);
}

var customerOne ={
    fName: "Ram",
    lName: "Sharma",
    print: fullName,
    // fullName: fullName() = fullname =ram sharma
}
var customerTwo ={
    fName: "Samip",
    lName: "Subedi",
    print: fullName
}

// customerOne.print();
// customerTwo.print();

// fullName.call(customerOne);
// fullName.call(customerTwo);




// console.log(customerOne.fullName)

``
