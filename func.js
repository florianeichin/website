function navigate(page) {
  var el = document.querySelector("template").content.querySelector('.' + page)

  if (document.querySelector("#container").hasChildNodes()) {
    document.querySelector("#container").lastChild.remove()
  }

  document.querySelector('#container').appendChild(
    document.importNode(el, true));
    menuToggle()
  
}
function init(page){
  navigate(page)
  menuToggle()
}

function menuToggle() {
  var x = document.getElementById("menu");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
  menuIconToggle()
}

function menuIconToggle(){
  var x = document.getElementById("menu-icon");
  if (x.className === "fa fa-bars") {
    x.className = "fa fa-times";
  } else {
    x.className = "fa fa-bars";
  }
}


init("about")