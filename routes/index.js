const express = require('express')
// const searchController = require('controllers/searchController')
const router = express.Router()
const products = [
    {
        "id": "prod001",
        "name": "Wireless Headphones",
        "description": "Premium wireless headphones with noise cancellation",
        "category": "electronics",
        "price": 89.99,
        "rating": 4.5,
        "popularity": 0.85,
        "tags": ["wireless", "audio", "headphones", "bluetooth", "noise-cancellation"]
    },
    {
        "id": "prod002",
        "name": "Bluetooth Speaker",
        "description": "Portable bluetooth speaker with 20 hour battery life",
        "category": "electronics",
        "price": 59.99,
        "rating": 4.2,
        "popularity": 0.78,
        "tags": ["wireless", "audio", "speaker", "bluetooth", "portable"]
    },
    {
        "id": "prod003",
        "name": "Smart Watch",
        "description": "Fitness tracking smartwatch with heart rate monitor",
        "category": "wearables",
        "price": 199.99,
        "rating": 4.7,
        "popularity": 0.92,
        "tags": ["smartwatch", "fitness", "health", "wearable", "bluetooth"]
    },
    {
        "id": "prod004",
        "name": "Fitness Tracker",
        "description": "Waterproof fitness band with sleep tracking",
        "category": "wearables",
        "price": 79.99,
        "rating": 4.3,
        "popularity": 0.75,
        "tags": ["fitness", "health", "wearable", "waterproof", "sleep-tracking"]
    },
    {
        "id": "prod005",
        "name": "Laptop Sleeve",
        "description": "Protective neoprene sleeve for laptops up to 15 inches",
        "category": "accessories",
        "price": 24.99,
        "rating": 4.0,
        "popularity": 0.65,
        "tags": ["laptop", "sleeve", "protection", "case", "neoprene"]
    },
    {
        "id": "prod006",
        "name": "Wireless Earbuds",
        "description": "True wireless earbuds with charging case",
        "category": "electronics",
        "price": 129.99,
        "rating": 4.6,
        "popularity": 0.88,
        "tags": ["wireless", "audio", "earbuds", "bluetooth", "charging-case"]
    },
    {
        "id": "prod007",
        "name": "Smart Fitness Watch",
        "description": "Advanced fitness watch with GPS and heart monitoring",
        "category": "wearables",
        "price": 249.99,
        "rating": 4.8,
        "popularity": 0.90,
        "tags": ["smartwatch", "fitness", "gps", "health", "heart-rate"]
    }
]

const advertisements = [
    {
        "id": "ad001",
        "productId": "prod006",
        "title": "Premium Wireless Earbuds - Now on Sale!",
        "description": "Experience true wireless freedom with our best-selling earbuds",
        "targetKeywords": ["wireless", "earbuds", "audio", "headphones"],
        "bidAmount": 1.25,
        "budget": 500.00,
        "impressions": 1250,
        "clicks": 85
    },
    {
        "id": "ad002",
        "productId": "prod003",
        "title": "Track Your Fitness with Our Smart Watch",
        "description": "Monitor your health and stay connected with our premium smartwatch",
        "targetKeywords": ["smartwatch", "fitness tracker", "health monitor"],
        "bidAmount": 2.50,
        "budget": 1000.00,
        "impressions": 1800,
        "clicks": 120
    },
    {
        "id": "ad003",
        "productId": "prod007",
        "title": "Ultimate Fitness Companion - GPS Watch",
        "description": "Take your workouts to the next level with GPS tracking and heart monitoring",
        "targetKeywords": ["fitness watch", "gps watch", "heart rate", "workout"],
        "bidAmount": 3.00,
        "budget": 1500.00,
        "impressions": 950,
        "clicks": 75
    },
    {
        "id": "ad004",
        "productId": "prod001",
        "title": "Premium Noise Cancellation Headphones",
        "description": "Block out the world and enjoy your music with advanced noise cancellation",
        "targetKeywords": ["noise cancellation", "wireless headphones", "premium audio"],
        "bidAmount": 1.75,
        "budget": 800.00,
        "impressions": 1450,
        "clicks": 95
    }
]

router.get('/get/:string',(req, res)=> {
    const {string} = req.params
    // let products = []
    // products.forEach(
    //     products.push(products.find(prd=>prd.name === string))
    // )
    const foundProductByName = products.find(prd=>prd.name === string)
    const foundProductByDesc = products.find(prd=>prd.description === string)
    const foundProductByCategory = products.find(prd=>prd.category === string)
    if(foundProductByName){
        res.send(foundProductByName)
    }else if(foundProductByDesc){
        res.send(foundProductByDesc)
    }else if(foundProductByCategory){
        res.send(foundProductByCategory)
    }else{
        res.send("Product not found")
    }
    // res.send(foundProduct)
})

module.exports = router