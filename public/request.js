fetch('/places/list', {
    headers: {
        'Accept': 'text/json',
    }
})
    .then(rebuildPlaces)

async function rebuildPlaces(res) {
    const places = await res.json()
    for (const entry of Object.entries(places)) {
        const [key, data] = entry
        const placeEl = document.createElement('a')
        placeEl.className = 'place';
        placeEl.innerText = key
        placeEl.href = '/places/book/' + key
        if (data.booked) {
            placeEl.className += " booked"
        }
        document.body.getElementsByClassName('places')[0].appendChild(placeEl)
    }
}