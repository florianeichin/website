function useIt(page) {
    //var link = document.querySelector('link[rel="import"]');
    //var content = link.import;
    //var el = content.querySelector('.about');
    var el = document.querySelector("template").content.querySelector('.' + page)
    console.log(el)

    if (document.querySelector("#container").hasChildNodes()) {
      document.querySelector("#container").lastChild.remove()
    }

    document.querySelector('#container').appendChild(
      document.importNode(el, true));
  }

  function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
    var x = document.getElementById("menu-icon");
    if (x.className === "fa fa-bars") {
      x.className = "fa fa-times";
    } else {
      x.className = "fa fa-bars";
    }

  }


  useIt("about")