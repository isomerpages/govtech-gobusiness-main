
function display(c) {
    hide()
    let one = document.getElementById(c)
    one.style.display = "inherit"
}

function hide() {
    let x = document.getElementsByClassName("blog-paginated-container")
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    } 

}

function indexChange() {
  let y = document.getElementsByClassName("blogpage-index")
  for (i = 0; i < x.length; i++) {
    y[i].classList.remove("mystyle");
  } 
}