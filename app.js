// Look, it's Javascript!
console.log("Hello class!!!");

// Do something when the whole DOM is loaded
addEventListener("DOMContentLoaded", (event) => {});

function doStuff() {
  console.log("button!!!!!");
}

//--primary-color: #e3e5e6;
//--secondary-color: #535b71;

const primaryButton = document.getElementById("primaryButton");

const variables = document.querySelector(":root");

let theme = "light";

const changeTheme = () => {
  if (theme === "light") {
    variables.style.setProperty("--primary-color", "#363d49");
    variables.style.setProperty("--secondary-color", "#535b71");
    variables.style.setProperty("--outer-text", "#f5f7f9");
    primaryButton.innerHTML = "Light Mode";

    theme = "dark";
  } else {
    variables.style.setProperty("--primary-color", "#e3e5e6");
    variables.style.setProperty("--secondary-color", "#535b71");
    variables.style.setProperty("--outer-text", "#535b71");
    primaryButton.innerHTML = "Dark Mode";
    theme = "light";
  }
};



primaryButton.addEventListener("click", changeTheme);



// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
function openModal(src, alt) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = alt;
}

var images = [...document.querySelector("#san-francisco-photos").getElementsByTagName("img"), ...document.querySelector("#chicago-photos").getElementsByTagName("img"), ...document.querySelector("#denver-photos").getElementsByTagName("img")];

console.log(images)

// Loop through the images and add onclick function
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        openModal(this.src, this.alt);
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

const denverPictures = document.getElementById("denver-photos")

const chicagoPictures = document.getElementById("chicago-photos")
      
const sanFranciscoPictures = document.getElementById("san-francisco-photos")



const denverButton = document.getElementById("Denver")

const chicagoButton = document.getElementById("Chicago")

const sanFranciscoButton = document.getElementById("San Francisco")

let buttons = [denverButton, chicagoButton, sanFranciscoButton]

let activeButton = "San Francisco"

const updateButtons = () => {
  for (let i = 0; i < buttons.length; i++){

    buttons[i].style.backgroundColor = "#f5f7f9"
    buttons[i].style.color = "#363d49"
    
    if (buttons[i].id === activeButton){
      buttons[i].style.backgroundColor = "#363d49"
      buttons[i].style.color = "#f5f7f9"
    }
  };
  
}

updateButtons()

const changeActivePictures = (event) => {
  
  activeButton = event.target.id
  
  if (event.target.id === "Denver"){
    denverPictures.style.display = "flex"
    sanFranciscoPictures.style.display = "none"
    chicagoPictures.style.display = "none"
  }
  else if (event.target.id === "San Francisco"){
    denverPictures.style.display = "none"
    sanFranciscoPictures.style.display = "flex"
    chicagoPictures.style.display = "none"
  }
  else if (event.target.id === "Chicago"){
    denverPictures.style.display = "none"
    sanFranciscoPictures.style.display = "none"
    chicagoPictures.style.display = "flex"
  }
  
  updateButtons()
}


denverButton.addEventListener("click", changeActivePictures)
chicagoButton.addEventListener("click", changeActivePictures)
sanFranciscoButton.addEventListener("click", changeActivePictures)