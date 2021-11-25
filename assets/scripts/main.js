
// Script version 0.0.1
/*const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem labore illum adipisci quam expedita sequi, vel ipsum doloribus perferendis quaerat perspiciatis, molestias incidunt a maxime, accusantium veritatis cum magnam!"
const paragraph = document.querySelector("main p")
let word = document.createElement("span")
word.className = "word"

for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
        paragraph.appendChild(word)
        word = document.createElement("span")
        word.className = "word"
    }

    const letter = document.createElement("span")
    letter.className = "letter"
    letter.innerText = text[i]
    word.appendChild(letter)
}

paragraph.appendChild(word)*/

// Script version 0.0.2

const stats = {
    errors: 0,
    corrects: 0,
    time: 0
}

const text = "lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem labore illum adipisci quam expedita sequi, vel ipsum doloribus perferendis quaerat perspiciatis, molestias incidunt a maxime, accusantium veritatis cum magnam!"
const paragraph = document.querySelector("main p")

let textElements = []

const createWord = () => {
    const element = document.createElement("span")
    element.className = "word"
    return element 
}

const createLetter = (word, letter) =>{
    const element = document.createElement("span")
    element.className = "letter"
    element.innerText = letter
    textElements.push(element)
    word.appendChild(element)
}

let word = createWord()

text.split('').forEach(letter => {
  if(letter === " ")
  {
    paragraph.appendChild(word)
    word = createWord()    
  }  

  createLetter(word, letter)
})

paragraph.appendChild(word)

// IDENTIFICA A LETRA DIGITADA 
let pos = 0

setInterval(() => {stats.time++}, 1000)


window.addEventListener("keydown", event => {
    const correct = event.key == text[pos]

    if(correct)
    {
        textElements[pos].classList.remove("wrong")
        textElements[pos].classList.add("correct")
        stats.corrects++
    } else{
        textElements[pos].classList.add("wrong")
        stats.errors++
    }
    pos++
})