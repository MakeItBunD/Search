export function loader() {
    const searchContent = document.querySelector('.repositories')
    let loader = searchContent.querySelector('.loader')

    if (loader) {
        loader.remove()
    } else {
        loader = document.createElement('div')
        loader.className = 'loader'
        searchContent.append(loader)
    }
}