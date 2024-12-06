const block1 = document.querySelector ('#block1')
const block2 = document.querySelector ('#block2')
const block3 = document.querySelector ('#block3')
const block4 = document.querySelector ('#block4')
const key = document.querySelector ('#key')

// blocks background

block1.addEventListener('click',() => {
    block1.style.backgroundColor = 'black'
})

block2.addEventListener('click',() => {
    block2.style.backgroundColor = 'black'
})

block3.addEventListener('click',() => {
    block3.style.backgroundColor = 'black'
})

block4.addEventListener('click',() => {
    block4.style.backgroundColor = 'black'
})

// key block color

document.addEventListener('keydown', function (event) {
 if (event.key === 'a') {
 key.style.backgroundColor = 'pink'
 }

 else if (event.key === 's') {
 key.style.backgroundColor = 'orange'
 }

 else if (event.key === 'd') {
 key.style.backgroundColor = 'aqua'
 }
})

// create div

document.addEventListener('keydown', (evt) => {
    let color

    if (evt.key === 'q') {
        color = 'grey'
    } else if (evt.key === 'w') {
        color = 'violet'
    } else if (evt.key === 'e') {
        color = 'brown'
    }

    if (color) {
        const newDiv = document.createElement('div')
        newDiv.style.width = '200px'
        newDiv.style.height = '200px'
        newDiv.style.backgroundColor = color
        newDiv.style.display = 'inline-block'
        document.body.appendChild(newDiv)
    }
})
