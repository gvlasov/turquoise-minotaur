import express, {Express, Request, Response} from 'express';

interface Drink {
    name: string
    cost: number
}

interface Menu {
    [id: number]: Drink
}

const drinks: Menu = {
    1: {
        name: 'IPA',
        cost: 10
    },
    2: {
        name: 'APA',
        cost: 20
    },
    3: {
        name: 'PUPA',
        cost: 30
    },
    4: {
        name: 'LUPA',
        cost: 40
    },
}
const order: Drink[] = [];
const app: Express = express();
const port = 8100
if (Number.isNaN(port)) {
    throw new Error('HTTP_PORT env variable is not defined')
}

app.get('/drink/list', (req: Request, res: Response) => {
    res.send(drinks)
});
app.get('/order', (req: Request, res: Response) => {
    res.send({order})
});
app.get('/drink/order/:id', (req: Request, res: Response) => {
    return res.sendStatus(404)
    const id = parseInt(req.params.id || '')
    if (Number.isNaN(id) || !(id in drinks)) {
        return res.sendStatus(404)
    }
    order.push(drinks[id])
    return res.redirect('/')
});
app.use('/', express.static('public'))
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});