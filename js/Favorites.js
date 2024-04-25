export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = [{
            login: 'phfernandes-dev',
            name: 'Pedro Fernandes',
            public_repos: '76',
            followers: '12000'
        },
        {
            login: 'diego3g',
            name: 'Diego Fernandes',
            public_repos: '76',
            followers: '12000'
        }]
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')


        this.update()
    }

    update() {
        this.removeAllTr()

        this.entries.forEach( user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repos').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            this.tbody.append(row)
        })

    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
            <td class="user">
                <img src="https://github.com/phfernandes-dev.png" alt="Imagem de Pedro">
                <a href="https://github.com/phfernandes-dev" target="_blank">
                    <p>Pedro Fernandes</p>
                    <span>phfernandes-dev</span>
                </a>
            </td>
            <td class="repos">4</td>
            <td class="followers">0</td>
            <td><button class="remove">Remover</button></td>
        `

        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr')
        .forEach((tr) => {
            tr.remove()
        })
    }
}
