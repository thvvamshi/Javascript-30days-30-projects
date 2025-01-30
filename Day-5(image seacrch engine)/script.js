// Accessing DOM elements by their respective classes to manipulate them later
const searchInput = document.querySelector(".searchInput"); // Search input field
const inputBox = document.querySelector(".inputBox"); // Input box where user types search query
const searchImages = document.querySelector(".searchImages"); // Div where images will be displayed
const showmore = document.querySelector(".showmore"); // "Show More" button to load more images

// Your Unsplash API key
const apikey = `...`; // Replace with your actual API key

// Initialize keyword and page variables
let keyword = ""; // Store the search keyword
let page = 1; // Track the current page number, starts at 1

// Asynchronous function to fetch images based on the search keyword
async function searchimages() {
    // Get the search keyword from the input box
    keyword = inputBox.value;

    // Fetch images from Unsplash API using the current page and keyword
    const Response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apikey}&per_page=12`);

    // Convert the response to JSON format
    const data = await Response.json();

    // If it's the first page, clear the existing images before displaying new ones
    if(page === 1){
        searchImages.innerHTML = ""; // Clear searchImages div
    }

    // Store the search results from the API response
    const results = data.results;  

    // Iterate over each result and create image elements
    results.forEach((result) => {
        // Create an image element for each result
        const img = document.createElement("img");
        img.src = result.urls.small; // Set the image source URL

        // Create a link element to wrap the image, linking to the Unsplash page
        const imglink = document.createElement("a");
        imglink.href = result.links.html; // Link to the Unsplash image page
        imglink.target = "_blanks"; // Open the link in a new tab

        // Append the image inside the anchor tag
        imglink.appendChild(img); 

        // Append the anchor tag to the searchImages div to display the image
        searchImages.appendChild(imglink);

        // Show the "Show More" button after images are loaded
        showmore.style.display = "block";
    });
};

// Add an event listener for the submit event on the search input
searchInput.addEventListener("submit", (event) => {
    // Prevent the default form submission action
    event.preventDefault();

    // Reset page number to 1 for a fresh search
    page = 1;

    // Call the searchimages function to perform the search
    searchimages();
});

// Add a click event listener on the "Show More" button to load more images
showmore.addEventListener("click", () => {
    // Increment the page number to load the next set of images
    page++;

    // Call the searchimages function again to load more results
    searchimages();
});
