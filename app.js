const primaryButton = document.getElementById("primaryButton");

let theme = "light";

const changeTheme = () => {
  if (theme === "light") {
    console.log("switching to dark")
    document.querySelector('html').style.backgroundColor = "darkblue";
    theme = "dark"
  }
  else{
    console.log("switching to light")
    document.querySelector('html').style.backgroundColor = "aliceblue";
    theme = "light"
  }
};

primaryButton.addEventListener("click", changeTheme);
