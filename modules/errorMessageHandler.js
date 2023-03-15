export function errorMessageHandler(fieldContainer, action, text = null) {
    const small = fieldContainer.querySelector('small')
    const field = fieldContainer.querySelector('.form__input_text')

    if (action == 'show') {
        small.innerHTML = text
        field.classList.add('error')
    } else {
        small.innerHTML = null
        field.classList.remove('error')
    }
}