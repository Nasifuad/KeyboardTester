const display = document.querySelector(".display");

// Create a mapping for numbers and special characters
const keyMap = {
  "`": "backtic",
  1: "btn1",
  2: "btn2",
  3: "btn3",
  4: "btn4",
  5: "btn5",
  6: "btn6",
  7: "btn7",
  8: "btn8",
  9: "btn9",
  0: "btn0",
  "-": "minus",
  "=": "plus",
  "[": "bracket1",
  "]": "bracket2",
  "\\": "slash1",
  ";": "semicolon",
  "'": "quote",
  ",": "comma",
  ".": "dot",
  "/": "slash2",
};

addEventListener("keydown", (e) => {
  let keyname = e.key;

  console.log(keyname);

  // Handle the space key separately
  if (keyname.trim().length === 0) {
    keyname = "space";
  }

  // Create a new paragraph and insert it into the display
  const display_txt = document.createElement("p");
  display_txt.innerText = keyname;
  display.insertBefore(display_txt, display.firstChild);

  // Convert key to lowercase and look for a match in the keyMap
  let key = keyname.toLowerCase();

  // If the key is a number or special character, map it to the corresponding id
  if (keyMap[key]) {
    key = keyMap[key];
  }

  const press = document.getElementById(key);

  if (press) {
    if (press.classList.contains("press")) {
      press.classList.remove("press");
      press.classList.add("double");
    } else {
      press.classList.remove("double");
      press.classList.add("press");
    }
  }
});
