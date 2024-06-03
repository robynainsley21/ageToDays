const output = document.querySelector('[output]')
const age = document.querySelector('[age]')
const calcBtn = document.querySelector('[calcBtn]')

calcBtn.addEventListener('click', (event)  => {
    event.preventDefault()
    let ageValue = age.value

    let result = ageValue * 365
    output.value = result
})