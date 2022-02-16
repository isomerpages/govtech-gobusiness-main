document.getElementById("blog-paginated-1").addEventListener('click', (e) => myFunction(e));
document.getElementById("blog-paginated-2").addEventListener('click', (e) => myFunction(e));
document.getElementById("blog-paginated-3").addEventListener('click', (e) => myFunction(e));
document.getElementById("blog-paginated-4").addEventListener('click', (e) => myFunction(e));
document.getElementById("blog-paginated-5").addEventListener('click', (e) => myFunction(e));
document.getElementById("blog-paginated-6").addEventListener('click', (e) => myFunction(e));
document.getElementById("blog-paginated-7").addEventListener('click', (e) => myFunction(e));
document.getElementById("blog-paginated-8").addEventListener('click', (e) => myFunction(e));
document.getElementById("blog-paginated-9").addEventListener('click', (e) => myFunction(e));

function myFunction(e) {
  hide()
  let one = document.getElementById(`${e.target.id}-container`);
  let two = document.getElementById(e.target.id);
  indexChange()
  two.classList.add("blogpage-index-selected")
  one.style.display = "inherit";
  
}


function hide() {
    let x = document.getElementsByClassName("blog-paginated-container")
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
};

function indexChange() {
  let y = document.getElementsByClassName("blogpage-index")
  for (i = 0; i < y.length; i++) {
    y[i].classList.remove("blogpage-index-selected");
  }
};
