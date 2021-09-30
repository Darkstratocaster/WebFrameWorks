const express = require('express')
const app = express()
const port = 4000
const productData = require('./data.json');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products', (req, res) => {
  res.json(productData);
})

app.post('/products', (req, res) => {
  console.log(req.body);
  console.log('Name is '+ req.body.name);
  productData.records.push({
      id: uuidv4(),
      name: req.body.name,
      band: req.body.band,
      type: req.body.type,
      price: req.body.price,
      rating: req.body.rating,
      image: req.body.image
  })
  res.send(productData.records);
})

app.delete('/products/:id', (req, res) => {
  const result = productData.records.findIndex(d => d.id == req.params.id);
  if(result !== -1) {
    productData.records.splice(result, 1);
    res.send(productData.records);
} else{
    res.send('Item not found');
}
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})