const input = document.querySelectorAll('input')
console.log(input)

input.forEach(input => {

    input.addEventListener('change', () => {

        if (input.value !== "") {
            input.classList.add('mudar-cor');
        } else {
            input.classList.remove('mudar-cor')
        }
    })

})