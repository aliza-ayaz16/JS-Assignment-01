//==========================================Q1=========================================================
//Write a function that creates a closure and returns a function that can add
//a specific number to any number passed to it. For example, if the closure is
//created with 5, the returned function should add 5 to any number passed
//to it.

// let num1 = +prompt("Enter the first number:");
// let num2 = +prompt("Enter the second number:");
// function add (value1) {
//     return function child (value2) {
//         console.log(value1 + value2)
//     }
// }
// let final = add(num1)
// let final_2 = final(num2)

//==========================================Q2=========================================================
//Write a recursive function that searches an array for a specific value. The
//function should return true if the value is found, and false if it is not. You
//can assume that the array is not nested.


// let userSearch = +prompt("Enter the number you want to search (1 till 9):");
// let comp_array = [Math.round(Math.random() * 10)];

// let i = 0;
// function array (arry) {
//     if (userSearch === arry[i]) {
//         return true;
//         // console.log("True");
//     }

//     else if (i <= array.length-1) {
//         i = i+1;
//         array(comp_array);
//     }
//     else {
//         return
//         // console.log("False");
//     }

// }

// array(comp_array);

// if(array(comp_array) == true) {
//     console.log("True");
// }

// else {
//     console.log("False");
// }

//==========================================Q3=========================================================
// Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

//===========Para appears right after DOCTYPE tag

// let userText = prompt("Enter the paragraph you want to add to the page:");
// let userPara = document.createElement("p");
// let parent_html = document.getElementsByTagName("html")[0];

// function para (required_string) {
// userPara.innerHTML = required_string;
// // console.log(required_string.innerHTML)
// parent_html.appendChild(userPara)
// parent_html.insertAdjacentElement("afterbegin", userPara)
// }

// para(userText)

//===========Para appears in body tag

// let userText = prompt("Enter the paragraph you want to add to the page:");
// let userPara = document.createElement("p");
// let parent_body = document.getElementsByTagName("body")[0];

// function para (required_string) {
// userPara.innerHTML = required_string;
// // console.log(required_string.innerHTML);
// parent_body.appendChild(userPara);
// parent_body.insertAdjacentElement("afterbegin", userPara);
// }

// para(userText)

//==========================================Q4=========================================================
// Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

// let userList0 = prompt("Enter an item:");
// let userList = [userList0];
// let finalList = JSON.stringify(userList)
// console.log(finalList);
// let parentBody = document.getElementsByTagName("body")[0];
// let unordered_list = document.createElement("ul");
// parentBody.appendChild(unordered_list);
// parentBody.insertAdjacentElement("afterbegin", unordered_list)
// let listed_item = document.createElement("li");
// unordered_list.appendChild(listed_item);
// unordered_list.insertAdjacentElement("afterbegin", listed_item);

// function list(listed_items) {
//     listed_item.innerHTML = listed_items;
//     listed_item.insertAdjacentElement("afterbegin", userList0);
// }
// list(userList0)

// please ignore lines 116 till 122==========================

// // let listed_items2 = document.createElement("li");
// // unordered_list.appendChild(listed_items2);
// // unordered_list.insertAdjacentElement("afterbegin", listed_items2);
// // let listed_items3 = document.createElement("li");
// // unordered_list.appendChild(listed_items3);
// // unordered_list.insertAdjacentElement("afterbegin", listed_items3);

//==========================================Q5=========================================================
// Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

// let main = document.getElementById("container")
// let heading = document.getElementById("my_heading");
// function newColor(element, bgColor) {
//     heading.style.backgroundColor = bgColor;
// };

// newColor(main, "red");
// // Also uncomment the HTML code //

//==========================================Q6=========================================================
// Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

// // localStorage.clear();

// let userData = {
//     fullName : prompt("Enter your Full Name:"),
//     yourAge : +prompt("Enter your age:"),
//     yourResidence : prompt("Where do you live?"),
//     education : prompt("What is your last qualification?")
// }

//  function storingData(key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
// }
// localStorage.setItem("User Data", JSON.stringify(userData));


//==========================================Q7=========================================================
// Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

// localStorage.clear();

// let objectMy = {
//     fullName: "Syeda Aliza Ayaz",
//     myAge: 16,
//     emailAddress: "syedaalizaayaz.1276@gmail.com",
//     studentID: 96374
// }

// function retrieveData(key) {
//     let stringified = JSON.stringify(key)
//     localStorage.setItem("My DATA", stringified)
//     return localStorage.getItem("My DATA")
// }

// let finalView = retrieveData(objectMy);
// console.log(finalView);

//==========================================Q8=========================================================
// Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object

// localStorage.clear();

// let objectMy = {
//     fullName: "Syeda Aliza Ayaz",
//     myAge: 16,
//     emailAddress: "syedaalizaayaz.1276@gmail.com",
//     studentID: 96374
// }

// let object1 = {
//     fullName: "Fazeelat",
//     myAge: 13,
//     emailAddress: "random@gmail.com",
//     studentID: 98900
// }


// let object2 = {
//     fullName: "Haram",
//     myAge: 10,
//     emailAddress: "random2@gmail.com",
//     studentID: 98911
// }


// function storeData(key, value) {
//     let newObj = JSON.stringify(value);
//     localStorage.setItem(key, newObj);
//     dataArr = [objectMy];
//     localStorage.setItem("fullName", JSON.stringify(dataArr[0]['fullName']) )
//     localStorage.setItem("myAge", JSON.stringify(dataArr[0]['myAge']) )
//     localStorage.setItem("emailAddress", JSON.stringify(dataArr[0]['emailAddress']) )
//     localStorage.setItem("studentID", JSON.stringify(dataArr[0]['studentID']) )
//     console.log("Stringified Object \n\n", newObj)
// }


// function retrieveData(yourObj) {
//     let stringToObj = JSON.parse(localStorage.getItem(yourObj));
//     console.log("The string has again converted to Object \n\n" , stringToObj)
// }

// storeData("My Data", objectMy);
// retrieveData("My Data");

