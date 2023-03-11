
//Through Query Selector you can grab any vlaue by using Class,Id,tags etc and even jquery.
// Query Selector //
// var header = document.querySelector("#main-header");
// console.log(header);

// header.style.borderBottom = "4px solid #ccc";

// var input = document.querySelector("input");
// input.value = " Hey Coders";

// var submit = document.querySelector("input[type='submit']");
// submit.value ="Done";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color ="blue";

// // var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// // secondItem.style.color = "coral";

// //1.Make the 2nd item have green background color
// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.backgroundColor="green";

// //2.Make the 3rd item invisible
// var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.visibility = "hidden";

//Through querySelectorAll it will grab all elements,you can select class,id,tags etc
//  QUERYSELECTORALL  //

// var titles = document.querySelectorAll(".title");
// console.log(titles);

// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even');

// for(var i=0; i<= odd.length; i++) {
//    odd[i].style.backgroundColor = '#f4f4f4';
//    even[i].style.backgroundColor = '#ccc';
// }

//1.Using QuerySelectorALL change the font color to green for 2nd item in the item list

var lists = document.querySelectorAll('li');
lists[1].style.color = "green";

//2.Choose all the odd elements and make their background green using QuerySelectorALL﻿

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i<odd.length; i++){
     odd[i].style.backgroundColor ="green";
}