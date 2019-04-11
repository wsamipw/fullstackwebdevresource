// // console.log(document);

// // console.dir(document);

// // document.title = "Title is new"

// // console.log(document.title);

// //selectors
// //1. select by id: getElementById returns an object

// // var footerEl =  document.getElementById("my-footer");
// // console.log(footerEl);

// // var aboutEl = document.getElementById("about-title-text");

// // aboutEl.innerText = 'About Us';

// // aboutEl.innerText= "About us"

// // console.dir(aboutEl);

// // console.log(aboutEl.innerText);

// //2. getElementsByClassName;
// // var aboutEl = document.getElementsByClassName("about-section");


// // console.dir(aboutEl);

// // //getElementsByClassName returns an array of objects
// // var testDivEl = document.getElementsByClassName("test-div");
// // console.dir(testDivEl);

// // // console.log(testDivEl[2].innerText);

// // for(let i=0; i<testDivEl.length; i++){
// //     testDivEl[i].style.color = "red";
// //     testDivEl[i].style.borderBottom = "1px blue solid";
// //     // console.dir(testDivEl[i]);
// //     // console.log(testDivEl[i].innerText);
// // }

// // //3. querySelector(), querySelectorAll()

// // var cardsEl = document.querySelector('.card:last-child');
// // console.dir(cardsEl);


// //parent child

// // console.dir(childEl);

// // var parentEl = childEl.parentNode;

// // console.dir(parentEl);

// // function handleBtnClick(el){
//     //     el.innerText="Clicked";
//     //     console.dir(el);
//     // }
    

// // var clickBtn = document.getElementById("clickBtn");
// // var childEl = document.getElementById("testOne");

// // clickBtn.onclick = function(){
// //     childEl.style.color = 'red';
// //     childEl.style.fontWeight ='bold';
// //     childEl.style.fontSize ='50px';

// //     console.log("Clickeddddddd");
// //     clickBtn.innerText="Nicely Clicked!!!!!";
// // }


// //create new html element using .createElement(),
// //this method takes an argument -> argument can be
// //p, div, span, basically any html element
// // var newP = document.createElement("p");

// // //assign new class name to newly created paragraph element
// // newP.className="normal";

// // //setting inner text of paragraph element
// // newP.innerText ="This is appended Paragragraph";
// // console.dir(newP);


// //setting up new attribute and its value
// // newP.setAttribute("id", "newID");
// // // newP.className="active";
// // console.dir(newP);
// // var newEl = document.getElementById("new-element");

// // newEl.appendChild(newP);

// // var changeBtn = document.getElementById("clickBtn");
// // changeBtn.onclick =function(){
// //     newP.className="active";
// // }


// // var textGeneratorBtn = document.getElementById("text-generator");
// // var generatedTextDiv = document.getElementById("generated-text");
// // var newTextPara = document.createElement('p');
// // newTextPara.innerText = "This is newly generated text. nice hahah.";
// // textGeneratorBtn.onclick =function(){
// //     generatedTextDiv.appendChild(newTextPara);
// // }



// // //new topic
// // var testBtn = document.getElementById("testBtn");

// // // testBtn.onclick = function(){
// // //     console.log("clicked")
// // // }

// // function handleBtnClick(el, text){
// //     el.innerText = text;
// // }

// // var customer =[{
// //     name: "ram",
// //     dob: "2015"
// // },
// // {
// //     name: "shyam",
// //     dob: "2015"
// // },
// // {
// //     name: "hari",
// //     dob: "2015"
// // }
// // ];

// // var mapped = document.querySelector(".mapped");

// // var value="";

// // customer.forEach(function(c,index){
// //     value = c.name;
// //     console.log(value);
// // });



// // //array methods: map(functiion (value, index, array))
// // //takes a function (a callback function), creates new array based on the callback function

// // customer.map(function(c, index){
// //     //create new Element
// //     let newP = document.createElement('p');

// //     //create new Text Node
// //     let newText = document.createTextNode(c.name);

// //     //append text to the p node
// //     newP.appendChild(newText);
// //     // console.log(newP);
// //     //append the p to our div
// //     mapped.appendChild(newP);
// // });

// // var eventBtn = document.querySelector("#eventBtn");
// // var nameInput = document.querySelector("#id_name");
// // console.log(nameInput);

// // nameInput.onchange = function(e){
// //     console.log(e.target);
// // }

// // nameInput.onkeyup = function(e){
// //     console.log(e.target.value);
// // }

// // eventBtn.onclick = function(e){


    
// //     // e.preventDefault();
// //     console.log(e.target.innerText);
// // }

// // var myInput = document.querySelector("#id_name");
// // var typedValue = document.querySelector('#typedValue');



// // //result ="abc" , 0=a, 1=b,

// // //isNaN(result[i])

// // myInput.onkeyup = function(e){

// //     //e=our event fired =object
// //     //target is one of the property of event = object
// //     //target is also an object
// //     var result = e.target.value;

// //     //convertint the string result into integer number

// //     //result = "abcd", "1234"
// //     var integerResult = parseInt(result);

// //     //checking for Not a Number
// //     if(isNaN(integerResult)){
// //         typedValue.innerText = "Please Enter valid Number.";
// //     }else {
// //         typedValue.innerText = result;
// //     }
// //     console.log(integerResult);
// //     // console.log(e);
// //     // console.log(result);
// //     // console.log(typeof result);
// //     // typedValue.innerText = result;
// // }


// // function handleChange(event){
// //     event.type ===""
// //     //do stuffs here
// // }


// // myInput.onchange =handleChange(e);
// // myInput.onkeydown =handleChange(e);

// //JSON
// var students =[
//     {
//         name:"samip Subedi",
//         college:"IOE",
//         dob: "124544",
//     },
//     {
//         name:"Ramesh Silwal",
//         college:"NCIT",
//         dob: "8824",
//     },
//     {
//         name:"Ganesh Mahat",
//         college:"HCOE",
//         dob: "1245445",
//     },
// ];

// //array.map()


// //first argument = current element,
// //second= current index, third=array under evaluation
// // students.map(function(student, index, array){
// //     console.log(index + " " + student.name);
// // });


// // var mappedData = students.map(function(student){
// //     return student.dob;
// // });

// // var arrayOne =[1,2,3,4,5];

// // //the function passed to map* is called a callback function
// // var square = arrayOne.map(function(arr){
// //     return arr*2;
// // });

// // console.log(square);


// // console.log(mappedData);

// var studentList = document.querySelector("#student-list");
// var studentTable = document.querySelector("#student-table");
// console.log(studentList);

// //looping through each array element
// students.forEach(function(student, index){
//     //index 0
//     //creating li for each student
//     // let listEl = document.createElement("li");

//     studentTable.innerHTML += `
//     <tr>
//         <td>${index+1}</td> 
//         <td>${student.name}</td>
//         <td>${student.college}</td>
//         <td>${student.dob}</td>
//     </tr>`;

//     //setting text of list = students name

//     //`my name is ${variable}`
//     // listEl.innerText = `${index +1} ${student.name}`; //1 samip subedi

//     //add the newly created list to ul element
//     // studentList.appendChild(listEl);
// });



// var forInnerHTML = document.querySelector("#forInnerHTML");

// forInnerHTML.innerHTML = '<h3>This is inserted HTML</h3> <p>This is inserted Paragraph after the heading tag</p>'; 


// // forInnerHTML.innerHTML = `<p>${ram==="nice"? someVariablesHere : falseStuffHere}</p>`

// var newString = "ramesh"

// // newString[0]