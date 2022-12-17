const express = require('express');
const app = express();

let products = [
    {
        id: 1,
        name: "Carpet",
        price: 500,
        amount: 4
    },
    {
        id: 2,
        name: "Picture of nature",
        price: 1000,
        amount: 2
    },
    {
        id: 3,
        name: "Wallpaper",
        price: 100,
        amount: 20
    },
    {
        id: 4,
        name: "Kettle",
        price: 250,
        amount: 8
    },
    {
        id: 5,
        name: "Cup",
        price: 40,
        amount: 500
    },
    {
        id: 6,
        name: "Organizer",
        price: 400,
        amount: 5
    },
    {
        id: 7,
        name: "Towel",
        price: 100,
        amount: 20
    },
    {
        id: 8,
        name: "Polyethylene bag",
        price:1,
        amount: 2000
    },
    {
        id: 9,
        name: "Blanket",
        price: 150,
        amount: 20
    },
    {
        id: 10,
        name: "Spoon&Fork&Knife",
        price: 15,
        amount: 10000
    }
]
app.get('/', function (req, res) {
    res.send(products);
});

app.get('/products', function (req, res) {
    res.send("Send num from 1 to 10 and get your product!")
})

app.get('/products/:id', function (req, res) {
    products.forEach((product) => {
        if (product.id == req.params.id){
            res.send(product)            
        }
    })
    
  });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
}); 