fetch('/drink/list', {
    headers: {
        'Accept': 'text/json',
    }
})
    .then(async res => {
        const drinks = await res.json()
        for (const entry of Object.entries(drinks)) {
            const [key, drink] = entry
            const link = document.createElement('a')
            link.className = 'item';
            link.innerText = drink.name + ' ' + drink.cost
            link.href = '/drink/order/' + key
            document.body.getElementsByClassName('menu')[0].appendChild(link)
        }
    })
fetch('/order', {
    headers: {
        'Accept': 'text/json',
    }
})
    .then(async res => {
        const order = await res.json()
        for (const entry of Object.entries(order.order)) {
            const [key, drink] = entry
            console.log(Object.entries(order))
            const item = document.createElement('div')
            item.className = 'item';
            item.innerText = drink.name;
            document.body.getElementsByClassName('order')[0].appendChild(item)
        }
    })
