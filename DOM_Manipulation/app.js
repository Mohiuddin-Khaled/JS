//external js
// alert("Hello World");

// output -> browser -> inspect -> console
// console.log("Hello World!");
// console.log("This is professional look!");

// select html tag name
// document.getElementsByTagName("h1");
// console.log(document.getElementsByTagName("h1"));
// var h1 = document.getElementsByTagName("h1");
// console.log(h1);

// select use Id
// var title = document.getElementById("title");
// console.log(title);

// select use class
// var child = document.getElementsByClassName("child");
// console.log(child[1]);

// add css in specific Id
// var title = document.getElementById("title").style.color = "red";
// console.log(title);

// remove css properties in specific Id
// document.getElementById("title").style.removeProperty("color");

// attribute get use id of html element
// var img = document.getElementById("img");
// console.log(img.getAttribute("src"));

// attribute set in html element use js
// var image = document.getElementById("image");
// attribute set, value argument pass
// image.setAttribute("alt", "picture");
// get attribute
// console.log(image.getAttribute("alt"));

// add class list in html element use js
// var pic = document.getElementById("pic");
// add class name in html attribute
// pic.classList.add("testClass");
// console.log(pic);

// get text in html element use js
// var hero = document.getElementById("hero");
// console.log(hero.innerText);

// get input field value and print value(form value)
// way 1
// var input = document.getElementById("input");
// console.log(input.value);
// way 2
// var input = document.getElementById("input").value;
// console.log(input);
// check input filed type
// console.log(typeof input);


// get html element by js
// var parent = document.getElementById("parent").innerHTML;
// console.log(parent);

// div & html element access
// var testDiv = document.getElementsByClassName("test");
// console.log(testDiv);
// console.log(testDiv[0]);
// console.log(testDiv[0].childNodes);
// console.log(testDiv[0].childNodes[1]);
// console.log(testDiv[0].childNodes[1].parentNode);
// console.log(testDiv[0].childNodes[1].parentNode.parentNode);
// console.log(testDiv[0].childNodes[1].parentNode.parentNode.parentNode);
// console.log(testDiv[0].childNodes[1].parentNode.parentNode.parentNode.childNodes);
// console.log(testDiv[0].childNodes[1].parentNode.parentNode.parentNode.childNodes[21]);

// html element create use js way---->1
// var newDiv = document.getElementById("newDiv");
// p tag create
// var p = document.createElement("p");
// insert value in html element
// p.innerText = "New html element text";
// html element append in body tag
// newDiv.appendChild(p);

// create html element by function way----->2
// var newDiv = document.getElementById("newDiv");
// function createEl() {
//     var p = document.createElement("p");
//     p.innerText = "New html element text";
//     newDiv.appendChild(p);
// }
// createEl();

//addEventListener click the button & work it!
// onClick event
// document.getElementById("submit-btn").addEventListener("click", function (e) {
//     console.log("Yes Boss!");
// });


// create html element by function when click addEventListener
// var newDiv = document.getElementById("newDiv");
// function createEl() {
//     var p = document.createElement("p");
//     p.innerText = "New html element";
//     newDiv.appendChild(p);
// }
// addEventListener function work click button
// onClick event
// document.getElementById("submit-btn").addEventListener("click", function (e) {
//     createEl();
// });

// when input in field then click button output show in console
// Onclick event
// document.getElementById("submit-btn").addEventListener("click", function (e) {
//     var inputValue = document.getElementById("input").value;
//     console.log(inputValue);
// });

// click html page anywhere, blur event work in input field
// onBlur event
// document.getElementById("input").addEventListener("blur", function (e) {
//     console.log("Blur event Work!");
// });

// input field insert value then click html page, show output in console
// onBlur event
// document.getElementById("input").addEventListener("blur", function (e) {
//     console.log(e.target.value);
// });

// onBlur event another way
// document.getElementById("input").addEventListener("blur", inputChange);
// create function include name
// function inputChange(e) {
//     console.log(e.target.value);
// };

// shortcut way onBlur="function name" in html file and event parameter function
// function inputChange(e) {
// console.log("eHello");
// console.log(e.target.value);
// }

// shortcut way onClick="function name" in html file and event parameter function
// function clickHandler(e) {
//     var inputValue = document.getElementById("input").value;
//     console.log(inputValue);
// };
































