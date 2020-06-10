// document.getElementById("demo").innerHTML = "Hello World"
// getElementsByTagName("p")
// getElementsByClassName("header")

document.getElementById("taco").style.width = '300px'
// event listeners

document.getElementById('btn').addEventListener("click", changePic)

var taco = document.getElementById("taco")

function changePic() {
  if (taco.src === "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1314&q=80")
    taco.src = 'https://images.unsplash.com/photo-1508154048109-de555266b70a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
  else {
    taco.src = "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1314&q=80"
  }
}