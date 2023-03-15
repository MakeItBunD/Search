export function emptyMessage(text) {
    const searchContent = document.querySelector('.repositories')
    let emptyMessage = searchContent.querySelector('.repositories__empty-message')

    if (emptyMessage) {
        emptyMessage.remove()
    } else {
        emptyMessage = document.createElement('h2')
        emptyMessage.className = 'repositories__empty-message'
        emptyMessage.innerHTML = text
        searchContent.append(emptyMessage)
    }
}