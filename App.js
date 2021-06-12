// Selectors.
let filterInput = document.getElementById("filterInput");

// Adding Event Listener
filterInput.addEventListener("keyup",filterNames);

// functions

function filterNames() {
    // Get Value of Input
    let filterValue = document.getElementById("filterInput").value.toUpperCase();
   
    // Get names ul.
    let ul = document.getElementById("names");
    // Get li from ul.
    let li = ul.querySelectorAll("li.collection-item");

    // loop through the items.

    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];

        // if mathches

        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}