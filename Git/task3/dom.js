// //EXAMINE THE DOCUMENT OBJECT //

// // console.dir(document);
// console.log(document.domain); 
// console.log(document.URL);
// console.log(document.title);
// document.title= 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all); 
// //you can grab any thing by using its index such as document.all[10] it means in document you want to grab 10 index value//

// console.log(document.all[10])

// // Now we can change things by using different methods
// document.all[10].textContent = "Hello";
// //But above mention method is not Good way.

// console.log(document.forms);
// //console.log(document.links);
// console.log(document.images);

//GETELEMENTSBYID //
// console.log(document.getElementById('header-title'));
   //or
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
  // we can change text by using certian methods
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';

// console.log(headerTitle.textContent); 
////op is "Item Lister 123"
// console.log(headerTitle.innerText);
////op is "Item Lister"
//// you can see in the above 123 is not there so it actually pays attention to style , but you can use interchange most time
//headerTitle.innerHTML = '<h3>Hello</h3>';

//////Style Changes (If you want to change style).
//headerTitle.style.borderBottom = 'solid 3px #000';
//header.style.borderBottom = 'solid 3px #000';     

var Title = document.querySelector(".title");
Title.style.color = "green";
console.log(Title);

Title.innerHTML = "<b>Add Items</b>";
// document.querySelector(".title").innerHTML = "<b>Add Items</b>";

console.log(Title);


