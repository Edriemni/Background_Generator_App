const bodyContainer = document.querySelector('body')
const colorBackground = document.querySelector('colorBackground')
const firstColorInput = document.querySelector('#firstPanel')
const secondColorInput = document.querySelector('#secondPanel')
const color = document.querySelector('p')

firstColorInput.addEventListener('input',() => {
   
    color.innerHTML= firstColorInput.value
    bodyContainer.style.background = `linear-gradient(to right, ${firstColorInput.value},${secondColorInput.value} )`
})
secondColorInput.addEventListener('input',() => {
    color.innerHTML= secondColorInput.value
    bodyContainer.style.background = `linear-gradient(to right, ${secondColorInput},${firstColorInput.value})`
})
