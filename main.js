
let container =document.querySelector(".container");
//let noTask = document.querySelector(".no-tasks");
let input = document.querySelector(".add input");
let btn = document.querySelector(".add .plus");
let content = document.querySelector(".content");

let count =document.querySelector(".count span");
let complete =document.querySelector(".complete span");


window.onload =function(){
    input.focus();
};
btn.onclick = function(){
    if (input.value === ""){
        console.log("NoValue")
    }
    else{
      //  console.log(input.value);
      let noTask = document.querySelector(".no-tasks");
if (document.body.contains(document.querySelector(".no-tasks"))) {
    noTask.remove();
};


     // noTask.remove();
      let MainSpan =document.createElement("span");
      let deleteBtn = document.createElement("span");
      let text = document.createTextNode(input.value);
      let textBtn = document.createTextNode("Delete");
      MainSpan.appendChild(text);
      MainSpan.className = "box";
      deleteBtn.appendChild(textBtn);
      deleteBtn.className = "delete";
      MainSpan.appendChild(deleteBtn);
      content.appendChild(MainSpan);
      input.value ="";
      input.focus();
      calculate();
    }
}
document.addEventListener("click",function(e){
if(e.target.className =="delete"){
   // console.log("our element");
   e.target.parentNode.remove();

   if (content.childElementCount == 0) {
    
    NOtFound();
   }

   
}
else if (e.target.classList.contains ("box")){
e.target.classList.toggle("finished");
 }
 
calculate();
});



function NOtFound(){
       let msg = document.createElement("span");
           let textMsg = document.createTextNode("No Tasks Found ");

    msg.appendChild(textMsg);

    msg.className = 'no-tasks';

    content.appendChild(msg);




}

function calculate(){
count.innerHTML = document.querySelectorAll(".content .box").length;

complete.innerHTML = document.querySelectorAll(".content .finished").length;



}
















