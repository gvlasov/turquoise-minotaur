import express, {Express, Request, Response} from 'express';


interface Places {
    [id: number]: {
        booked: boolean
    }
}

const places: Places = {
    1: {
        booked: false,
    },
    2: {
        booked: false,
    },
    3: {
        booked: false,
    },
    4: {
        booked: false,
    },
    5: {
        booked: false,
    },
    6: {
        booked: false,
    },
    7: {
        booked: false,
    },
    8: {
        booked: false,
    },
}
const app: Express = express();
const port = 8100
if (Number.isNaN(port)) {
    throw new Error('HTTP_PORT env variable is not defined')
}

app.get('/places/list', (req: Request, res: Response) => {

    return res.send(places)
});
app.get('/places/book/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id || '')
    if (Number.isNaN(id) || !(id in places)) {

        return res.send('fuck you')
        return res.sendStatus(404)
    }
    places[id].booked = !places[id].booked
    return res.redirect('/')
});
app.use('/', express.static('public'))
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});