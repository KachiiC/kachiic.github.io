// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
for (var i = 0; i < btn.length; i++;) {
    btn[i].onclick = function () {
        modal[i].style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
for (var i=0; i < btn.length; i++;) {
    span[0].onclick = function () {
        modal[0].style.display = "none";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
