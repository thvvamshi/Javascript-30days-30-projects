// Select the .message div where the new content will be added
let message = document.querySelector(".message");
let btn = document.querySelector(".btn");

// Select all paragraphs (.para) within the document
let para = document.querySelectorAll(".para");

// Add an event listener to the button to create a new paragraph and image on click
btn.addEventListener("click", () => {
    // Create a new <p> element to hold the new content
    let parabox = document.createElement("p");

    // Set the class name for the new paragraph element as "para"
    parabox.className = "para";

    // Create a new <img> element to add an image to the paragraph
    let img = document.createElement("img");

    // Set the "contenteditable" attribute to "true" so the paragraph text can be edited
    parabox.setAttribute("contenteditable", "true");

    // Set the source URL for the image inside the paragraph
    img.src = "https://cdn-icons-png.flaticon.com/128/1617/1617543.png";

    // Append the paragraph element to the message div, and then append the image to the paragraph
    message.appendChild(parabox).appendChild(img);
});

// Add an event listener to the message div to handle clicks within it
message.addEventListener("click", (e) => {
    // If the clicked element is an <img> tag, remove its parent (the <p> tag)
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();  // Remove the parent <p> that contains the <img>
        savedata();  // Save the updated content in localStorage

    // If the clicked element is a <p> tag, set up a listener for the 'keyup' event to save changes
    } else if (e.target.tagName === "P") {
        // Re-select all the paragraph elements in the document
        para = document.querySelectorAll(".para");

        // Use forEach to loop through each paragraph element and attach a keyup event listener
        para.forEach(note => {
            note.onkeyup = function() {
                savedata();  // Save the updated content to localStorage whenever the user types
            }
        });
    }
});

// Function to save the current content of the message div into localStorage
function savedata() {
    // Store the innerHTML of the message div (which includes all paragraphs and images) in localStorage
    localStorage.setItem("para", message.innerHTML);
}

// Function to retrieve the stored content from localStorage and display it on page load
function getdata() {
    // Set the innerHTML of the message div to the stored content from localStorage
    message.innerHTML = localStorage.getItem("para");
}

// Call getdata to display any previously saved content when the page loads
getdata();
