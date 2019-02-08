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

  useIt("about")