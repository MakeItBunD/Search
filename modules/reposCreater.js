import { getRepos } from "./getRepos.js"
import { getDateMessage } from "./getDateMessage.js"
import { emptyMessage } from "./emptyMessage.js"
import { errorWindow } from "./errorWindow.js"

export async function reposCreater(field) {
    const url = new URL('https://api.github.com/search/repositories')

    url.searchParams.set('per_page', `10`)
    url.searchParams.set('q', `${field.value} in:name`)

    const repositories = await getRepos(url)

    switch(true) {
        case !repositories:
            errorWindow()
            return

        case !repositories.length:
            emptyMessage('По вашему запросу ничего не найдено')
            return
    }

    field.value = ''

    const searchContent = document.querySelector('.repositories')

    for (let repos of repositories) {
        const reposContainer = document.createElement('div')

        const createdDate = new Date(repos.created_at)
        const createdDateMessage = getDateMessage(createdDate)

        reposContainer.innerHTML = `
            <div class="repositories__item">
                <img src="${repos.owner.avatar_url}" alt="Аватар" class="repositories__avatar">

                <div class="repositories__collumn">
                    <h2 class="repositories__title">Название репозитория</h2>
                    <a href="${repos.svn_url}" target="_blank" class="repositories__name">${repos.name}</a>
                </div>

                <div class="repositories__collumn">
                    <h2 class="repositories__title">Аккаунт владельца</h2>
                    <a href="${repos.owner.html_url}" target="_blank" class="repositories__owner">${repos.owner.login}</a>
                </div>

                <div class="repositories__collumn">
                    <h2 class="repositories__title">Дата создания</h2>
                    <p class="repositories__created">${createdDateMessage}</p>
                </div>
            </div>
        `
        
        searchContent.append(reposContainer)
    }
}