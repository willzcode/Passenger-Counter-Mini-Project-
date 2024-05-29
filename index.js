//document.getElementById("count-el").innerText = 5

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html to reflect th new count

//camelCase
 let countEl = document.getElementById("count-el") //pass an argument
 let saveEl = document.getElementById("save-el")
 let count = 0


function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent +=  countStr
    console.log(count)
    countEl.textContent = 0
    count = 0
}




// Grab the save-el paragraph and store it in a variable called saveEl
//Create a variable that contains both the count and the dash separator
// Render the variable in the saveEl using innerText
//NB: Make sure to not delete the existing content of the paragraph 