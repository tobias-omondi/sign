// accessing the button
 const mySubmittion = document.getElementById("btn")
//  adding an eventlisterner

mySubmittion.addEventListener('click',function(event){
    console.log('successful Submitted')
    alert('Successful Submited')
    // to prevent Default
    event.preventDefault();
})

// accessing h3

const heading = document.getElementById('lgn')
// changing heading name 

heading.textContent = heading.textContent.toLowerCase();