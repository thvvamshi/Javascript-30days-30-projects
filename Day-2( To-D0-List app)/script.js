const inputbox = document.querySelector("#inputbox");
const list = document.querySelector(".list");

function addTask(){

// condition for empty input
    if(inputbox.value ==''){
        alert("enter something");
    }else{

        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    // this for reset the input fleid after add task
    inputbox.value = "";
    // call the function
    savedata();
};

// condition for show check mark
list.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        // call the function
        savedata();
    }
    // condition for show remove span
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // call the function
        savedata();
    }
},false);

// store data in localStorage 
function savedata(){
    localStorage.setItem("data", list.innerHTML);
}

// display the data
function getdata(){
    list.innerHTML = localStorage.getItem("data");
}
getdata();