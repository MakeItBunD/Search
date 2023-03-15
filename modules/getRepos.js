import { loader } from "./loader.js"

export async function getRepos(url) {

    const button = document.querySelector('.form__input_submit')

    button.disabled = true
    loader()

    const response = await fetch(url)
    const result = await response.json()

    loader()
    button.disabled = false

    if (response.ok) return result.items
}