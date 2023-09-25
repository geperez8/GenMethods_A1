const primaryButton = document.getElementById("primaryButton");

let theme = "light";

const changeTheme = () => {
  if (theme === "light") {
    
    document.querySelector('html').style.backgroundColor = "darkblue";
    document.querySelector('html').style.color = "white";

    theme = "dark"
  }
  else{

    document.querySelector('html').style.backgroundColor = "aliceblue";
    document.querySelector('html').style.color = "black";

    theme = "light"
  }
};

primaryButton.addEventListener("click", changeTheme);
