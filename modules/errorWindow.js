export function errorWindow() {
    const errorWindow = document.createElement('div')
    errorWindow.className = 'error-window'

    errorWindow.innerHTML = `
        <h2 class="error-window__title">Произошла ошибка</h2>
        <p class="error-window__text">Возможно вы пытались произвести больше 10 поисков в минуту, GitHub нам этого не позволяет!</p>
        <button class="error-window__button button">Понятно</button>
    `

    const background = document.createElement('div')
    background.className = 'unclicked-bg'

    document.body.append(background, errorWindow)

    document.addEventListener('click', event => {

        if (!event.target.closest('.error-window__button')) return

        errorWindow.remove()
        background.remove()
    })
}