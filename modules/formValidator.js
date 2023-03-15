import { errorMessageHandler } from "./errorMessageHandler.js" 

export function formValidator(field) {
    const fieldContainer = field.closest('.form__item')
    
    switch (true) {
        case field.value.trim() == '': 
            errorMessageHandler(fieldContainer, 'show', 'Обязательное поле для заполнения')
            return false

        case /[а-яА-Я]/.test(field.value):
            errorMessageHandler(fieldContainer, 'show', 'Поле должно содержать только латинские буквы')
            return false

        default:
            return true
    }
}