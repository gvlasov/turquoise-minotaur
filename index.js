"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const drinks = {
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
};
const order = [];
const app = (0, express_1.default)();
const port = 8100;
if (Number.isNaN(port)) {
    throw new Error('HTTP_PORT env variable is not defined');
}
app.get('/drink/list', (req, res) => {
    res.send(drinks);
});
app.get('/order', (req, res) => {
    res.send({ order });
});
app.get('/drink/order/:id', (req, res) => {
    const id = parseInt(req.params.id || '');
    if (Number.isNaN(id) || !(id in drinks)) {
        return res.sendStatus(404);
    }
    order.push(drinks[id]);
    return res.redirect('/');
});
app.use('/', express_1.default.static('public'));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
