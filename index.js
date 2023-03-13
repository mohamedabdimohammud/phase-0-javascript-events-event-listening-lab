function addingEventListener() {
    const button = document.getElementById("button");
    function handleClick() {
      console.log("Button clicked!");
    }
    button.addEventListener("click", handleClick);
  }
  // Get the button element
const button = document.getElementById("button");

// Define the event listener function
function handleClick() {
  console.log("Button clicked!");
}

// Bind the event listener to the button element
button.addEventListener("click", handleClick);
