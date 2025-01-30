// Select the input box where the user types the task
const inputbox = document.querySelector("#inputbox");
const list = document.querySelector(".list");

// Function to add a new task when called
function addTask() {
    // Check if the input field is empty
    if(inputbox.value == '') {
        // If input is empty, show an alert asking the user to enter a task
        alert("enter something");
    } else {
        // Create a new list item (li) element
        let li = document.createElement("li");

        // Set the innerHTML of the new list item to the value from the input box
        li.innerHTML = inputbox.value;

        // Append the new list item to the list
        list.appendChild(li);

        // Create a span element that will be used to remove the task (× symbol)
        let span = document.createElement("span");

        // Set the innerHTML of the span to "×" (the remove symbol)
        span.innerHTML = "\u00d7";

        // Append the span to the list item (li)
        li.appendChild(span);
    }

    // Reset the input box to be empty after adding the task
    inputbox.value = "";

    // Call the function to save the current state of the task list to localStorage
    savedata();
};

// Add an event listener to the list that listens for clicks on list items and spans
list.addEventListener("click", (e) => {
    // If the user clicks on a list item (li), toggle the "checked" class on that item
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

        // Call the function to save the updated task list to localStorage
        savedata();
    }
    // If the user clicks on the remove "×" span, remove the list item (li)
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();

        // Call the function to save the updated task list to localStorage
        savedata();
    }
}, false);

// Function to save the current task list's innerHTML (HTML structure) to localStorage
function savedata() {
    localStorage.setItem("data", list.innerHTML);
}

// Function to retrieve the saved task list from localStorage
function getdata() {
    // Set the list's innerHTML to the stored value from localStorage
    list.innerHTML = localStorage.getItem("data");
}

// Call getdata to load the tasks from localStorage when the page loads
getdata();
