const display = document.querySelector(".display");
addEventListener("keydown", (e) => {
  let keyname = e.key;

  console.log(keyname);
  if (keyname.trim().length == 0) {
    keyname = "space";
  }

  const display_txt = document.createElement("p");
  display_txt.innerText = keyname;
  display.insertBefore(display_txt, display.firstChild);
  const press = document.getElementById(`${keyname}`);

  press.toggleAttribute("press");
});
