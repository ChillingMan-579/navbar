const title = document.getElementById("title-ani")

let i = 0;
let text = 'WELCOME'

function typeWriter(){
  if(i<text.length){
    title.innerText += text[i]
    i++
    setTimeout(typeWriter, 250)
  }
}
typeWriter()