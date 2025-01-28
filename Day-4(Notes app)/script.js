let message = document.querySelector(".message");
let btn = document.querySelector(".btn");
let para = document.querySelectorAll(".para");

// click event and create the p & img tags and append in message div
btn.addEventListener("click",()=>{
    let parabox = document.createElement("p");
    parabox.className ="para";
    let img = document.createElement("img");
    parabox.setAttribute("contenteditable" ,"true");
    img.src ="https://cdn-icons-png.flaticon.com/128/1617/1617543.png";
    message.appendChild(parabox).appendChild(img);
});

message.addEventListener("click",(e)=>{
    //condition when tagName === img then remove the parentElement
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        savedata();
        // condition for tagName === p then save the data in localstorage
    }else if(e.target.tagName === "P"){
        para = document.querySelectorAll(".para");
        // here forEach method travels through every parsent Element & save the data
        para.forEach(note =>{
            note.onkeyup = function(){
                savedata(); 
            }
        });
    }
});

// this function for storing the data in localdevice
function savedata(){
    localStorage.setItem("para", message.innerHTML);
}
// this function for display the data that stored in localdevice
function getdata(){
    message.innerHTML = localStorage.getItem("para");
}
// function call for display the data
getdata();