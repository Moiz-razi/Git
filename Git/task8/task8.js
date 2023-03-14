var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Form submit event
form.addEventListener('submit',addItem);
// Delete event
itemList.addEventListener('click',removeItem);
//Add Edit Button

//Add item
function addItem(e){
    e.preventDefault(); //it prevents from default

    // console.log(1);
    // Get input value
    var newItem = document.getElementById('item').value;
    
    // Create new li element
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    // Add text node with input value 
    li.appendChild(document.createTextNode(newItem));
    // console.log(li);

    //Creating Delete Button element
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    
    //Append text node
    deleteBtn.appendChild(document.createTextNode('x'));
    //Append buttom to li
    li.appendChild(deleteBtn);
    
    //Append li to list
    itemList.appendChild(li);
    console.log(itemList);
    // Add text node
    // li.appendChild(document.createTextNode())

}

// Remove Item
function removeItem(e){
  if(e.target.classList.contains('delete')) {
    if(confirm('Are You Sure? You want to delete')){
        var li = e.target.parentElement;  //through e.target we are removing ParenetElement
        itemList.removeChild(li); //li is the child of ItemList
    }
  }

}

//Add Edit button 
//create an element
var editBtn = document.createElement('button');
//Add class
editBtn.className="list-group-item";
//creating a textNode
var textNode = document.createTextNode('Edit')
//appending 
editBtn.appendChild(textNode);
itemList.appendChild(editBtn);
console.log(itemList);