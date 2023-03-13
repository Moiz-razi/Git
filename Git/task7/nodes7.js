// Task 7 Creating Nodes and Modifying Dom

                   // I )Parents

// 1.parentNode
let itemList = document.querySelector('#items');
console.log(itemList.parentNode);

itemList.parentNode.style.backgroundColor= "#f4f4f4";
console.log(itemList.parentNode.parentNode.parentNode);

// 2.parentElement
let itemList = document.querySelector('#items');
console.log(itemList.parentNode);

itemList.parentNode.style.backgroundColor= "#f4f4f4";
console.log(itemList.parentNode.parentNode.parentNode);

// Here ParentNode & ParentElement both are same, they are most of the time interchangable

                 // II) Children
// 3.childNodes
                  
console.log(itemList.childNodes);
    //in childNodes it includes line brakes and its a Nodelist
    //in children it doesn't use line brakes its easy and most of time interchangable
    //children is a HTMLCollection & childNode is a NodeList
// 4.children

   console.log(itemList.children);
   console.log(itemList.children[1]);
   itemList.children[1].style.backgroundColor ="yellow";

// 5.firstChild
     //first child useless dont use it & it gives us textnode
     //firstElementChild grabs first value
     console.log(itemList.firstChild);
// 6.firstElementChild
     console.log(itemList.firstElementChild);
     itemList.firstElementChild.textContent ="Green Item ";

// 7.lastChild
      //its give us textnode
      //lastElementChild grabs the last value
     // console.log(itemList.lastChild);
// 8.lastElementChild
  console.log(itemList.lastElementChild);
  itemList.lastElementChild.textContent = "hello 4"

// 9.nextSibling
      //nextSibling gives us textnode
      //nextElementSibling gives us next element(sibling)
  console.log(itemList.nextSibling);

               // III) Siblings

// 10.nextElementSibling
  console.log(itemList.nextElementSibling);
  itemList.nextElementSibling.style.color= "yellow";

// 11.previousSibling
      //previousSibling gives us textnode
      //previousSiblingElement gives us previous element
console.log(itemList.previousSibling);

// 12.previousSiblingElement
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.innerHTML = "<h2>Alpha</h2>";

              // IV) Create Elements

// 13.createElement()
var newDiv = document.createElement('div');
  //Add Class
newDiv.className = 'hello';
 // Add Id
newDiv.id = 'demo';
 // Add Attribute
newDiv.setAttribute('title','Hello Div');
console.log(newDiv);

// 14.createTextNode()

var newDivText = document.createTextNode('Hello World');
// 15.appendChild()
newDiv.appendChild(newDivText);

                // V) Insert Created Elements Into the DOM

// 16.insertBefore()
var container = document.querySelector('header .container'); // we want header in container class
var h1 = document.querySelector('header h1'); //lets grab header h1 
console.log(container);
console.log(newDiv);
newDiv.style.fontSize="30px";
// 17.insertBefore.
// ita gonna take 2 parameters oneis gonna be inserting which is "newDiv" and other is gonna be what we are inserting before h1"
container.insertBefore(newDiv,h1);
console.log(container);
