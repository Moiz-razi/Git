var Title = document.querySelector(".title");
Title.style.color = "green";
console.log(Title);

Title.innerHTML = "<b>Add Items</b>";
document.querySelector(".title").innerHTML = "<b>Add Items</b>";

console.log(Title);

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);

// // items[1].textContent ="Hello2";
// // items[1].style.fontWeight = "bold";
// // items[1].style.backgroundColor = "yellow";

// // //Gives error
// // //items.style.backgroundColor = #f4f4f4;

// // for( var i=0; i < items.length; i++) {
// //     items[i].style.backgroundColor = "#f4f4f4";
// // }


// //Here i am Changing 3rd element background to Green
// items[2].style.backgroundColor = "green";

// //here below items.style.fontWeight = "bold"; gives an error beacuse its an HTML list.So for this use for loop.
// // items.style.fontWeight = "bold";
// // here i have changed the background color of all list items through for loop
// for(var i=0; i < items.length; i++){
//     items[i].style.fontWeight = "bold";
// }

//GetElementsByTagName
var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent ="Hello2";
li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

 
for( var i=0; i < li.length; i++) {
    li[i].style.backgroundColor = "#f4f4f4";
}
