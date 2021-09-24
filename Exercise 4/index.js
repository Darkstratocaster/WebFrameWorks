const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
const { v4: uuidv4 } = require('uuid');


app.use(express.json());



let products = [{
    id: uuidv4(), 
    name: 'Les Paul-Kitara', 
    manufacturer: 'Gibson',
    category: 'Soittimet',
    description: 'Uudenveroinen kuusikielinen Les Paul', 
    price: 1200,
    image: null 
}];

let users = [{
    id: uuidv4(), 
    name: 'John Smith', 
    address: 'Somestreet123',
    contact: 'JohnSmith@mail.com'
}];

let invoices = [];


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products/search/:id', (req, res) => {

    const result = products.find(d => d.id === req.params.id);
    res.json(result);
  })



app.get('/products/searchName/:name', (req, res) => {
    const result = products.filter(d => d.name === req.params.name);
    if(result !== undefined) {
        res.json(result);
    } else {
        res.send('Not found');
    }
})  


app.get('/products/searchManufacturer/:manufacturer', (req, res) => {
    const result = products.filter(d => d.manufacturer === req.params.manufacturer);
    if(result !== undefined) {
        res.json(result);
    } else {
        res.send('Not found');
    }
})

app.get('/products/searchCategory/:category', (req, res) => {
    const result = products.filter(d => d.category === req.params.category);
    if(result !== undefined) {
        res.json(result);
    } else {
        res.send('Not found');
    }
})


app.get('/products', (req, res) => {
    res.json(products);
})

app.post('/products', (req, res) => {
    console.log(req.body);
    console.log('Name is '+ req.body.name);
    products.push({
        id: uuidv4(),
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    })
    res.send('Created');
})  


app.put('/products/:id', (req, res) => {
    const result = products.find(d => d.id === req.params.id);
    if(result !== undefined) {
        for (const key in req.body) {
            result[key] = req.body[key];
        }
        res.send('Modified');
    } else {
        res.send('Item not found');
    }
})

app.delete('/products/:id', (req, res) => {
    const result = products.findIndex(d => d.id === req.params.id);
    if(result !== -1) {
        products.splice(result, 1);
        res.send('Deleted');
    } else{
        res.send('Item not found');
    }
})

app.get('/users', (req, res) => {
    res.json(users);
})


app.post('/users', (req, res) => {
    users.push({
        id: uuidv4(),
        name: req.body.name,
        address: req.body.address,
        contact: req.body.contact
    })
    res.send('Created');
})

app.post('/invoices/:id/', (req, res) => {
    const userId = users.find(d => d.id === req.params.id);
    const productName = products.find(d => d.name === req.body.name);
    if(userId !== undefined && productName !== undefined) {
        invoices.push({
            id: uuidv4(),
            userId: req.params.id,
            name: req.body.name,
            amount: req.body.amount,
            priceOfProduct: productName.price,
            totalPrice: req.body.amount * productName.price
        })
        res.send('Created');
    } else {
        res.send('UserId is not valid')
    }
    
})


app.get('/invoices', (req, res) => {
    res.json(invoices);
})

app.get('/invoices/invoiceId/:id', (req, res) => {
    const result = invoices.filter(d => d.id === req.params.id);
    if(result !== undefined) {
        res.json(result);
    } else {
        res.send('Not found');
    }
    
})

app.get('/invoices/userId/:userId', (req, res) => {
    const result = invoices.filter(d => d.userId === req.params.userId);
    if(result !== undefined) {
        res.json(result);
    } else {
        res.send('Not found');
    }
    
})


app.delete('/invoices/:id', (req, res) => {
    const result = invoices.findIndex(d => d.id === req.params.id);
    if(result !== -1) {
        invoices.splice(result, 1);
        res.send('Deleted');
    } else{
        res.send('Item not found');
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})