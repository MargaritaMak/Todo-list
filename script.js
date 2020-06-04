const close =  document.getElementsByClassName('close');


for(let i = 0; i < close.length; i++){
    close[i].onclick = function(){
        let elem = document.getElementsByClassName('list');
        elem[i].style.display ='none';
    }
}


function newElement() {
    var li = document.createElement("li");
    li.className = 'list';
    var inputValue = document.getElementById("myInput").value;
    var text = document.createTextNode(inputValue);
   li.appendChild(text);
    if (inputValue === '') {
     alert("You must write something!");
   } else {
     document.getElementById("todo-list").appendChild(li);
   }
   document.getElementById("myInput").value = "";

   var button = document.createElement("BUTTON");
   var icon = document.createElement("I");
   icon.className = 'fas fa-window-close';
   button.className = "close";
   button.appendChild(icon);
   li.appendChild(button);

   const close =  document.getElementsByClassName('close');
    for(let i = 0; i < close.length; i++){
        close[i].onclick = function(){
        let elem = document.getElementsByClassName('list');
        elem[i].style.display ='none';
    }
 }
}

  
