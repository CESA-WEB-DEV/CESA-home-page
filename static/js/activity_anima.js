let onScroll = function(_e){
    let objects = Array.from(document.getElementsByClassName("hiddenn"))
    objects.forEach( obj => {
      let bottom_of_object = obj.offsetTop + obj.offsetHeight
      let bottom_of_window = window.scrollY + window.innerHeight
      let top_of_object = obj.offsetTop
      let top_of_window = window.scrollY
      if( bottom_of_window > bottom_of_object - 100 && top_of_window < top_of_object){
        obj.classList.add("fadein")
      }else{
        obj.classList.remove("fadein")
      }
    })
  }
  window.addEventListener("scroll", onScroll)