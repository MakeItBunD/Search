import { formValidator } from './modules/formValidator.js'
import { reposCreater } from './modules/reposCreater.js' 
import { errorMessageHandler } from './modules/errorMessageHandler.js'

const form = document.querySelector('form')
const shearhField = form.querySelector('.form__input_text')

form.addEventListener('click', event => {
    event.preventDefault()

    if (event.target.type != 'submit') return

    const field = form.querySelector('.form__input_text')
    const searchContent = document.querySelector('.repositories')

    if (formValidator(field)) {
        searchContent.innerHTML = ''
        reposCreater(field)
    }
})

shearhField.addEventListener('focus', event => {
    const field = event.target
    
    const fieldContainer = field.closest('.form__item')
    errorMessageHandler(fieldContainer, 'hide')
})

form.addEventListener('focusout', event => {
    if (!event.target.closest('.form__input_text')) return
    
    formValidator(event.target)
})