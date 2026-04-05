const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// In-memory data
let dealers = Array.from({ length: 50 }, (_, i) => ({
  "id": i + 1,
  "city": i % 2 === 0 ? "Topeka" : "Wichita",
  "state": "Kansas",
  "address": `${100 + i} Sunflower Lane`,
  "zip": "66601",
  "lat": 39.0473 + (i * 0.01),
  "long": -95.6752 - (i * 0.01),
  "short_name": `Dealer ${i + 1}`,
  "full_name": `Kansas Dealership Branch ${i + 1}`,
  "image": "/static/images/Dealerships/dextar-vision-ccgjEBvHTIU-unsplash.jpg"
}));

let reviews = [
  {
    "id": 1,
    "name": "Berkeley Dealership",
    "dealership": 1,
    "review": "Great service and friendly staff!",
    "purchase": true,
    "purchase_date": "02/15/2026",
    "car_make": "Toyota",
    "car_model": "Camry",
    "car_year": 2024,
    "sentiment": "positive"
  }
];

// Endpoints
app.get('/fetchDealers', (req, res) => {
  res.json(dealers);
});

app.get('/fetchDealersByState/:state', (req, res) => {
  const filtered = dealers.filter(d => d.state === req.params.state);
  res.json(filtered);
});

app.get('/fetchDealer/:id', (req, res) => {
  const dealer = dealers.find(d => d.id == req.params.id);
  const { st, ...dealerWithoutSt } = dealer;
  res.json(dealerWithoutSt);
});

app.get('/fetchReviews/dealer/:id', (req, res) => {
  const filtered = reviews.filter(r => r.dealership == req.params.id);
  const sanitizedReviews = filtered.map(({ sentiment, ...rest }) => rest);
  res.json(sanitizedReviews);
});

app.post('/insertReview', (req, res) => {
  const review = req.body;
  review.id = reviews.length + 1;
  reviews.push(review);
  res.json({ status: 200 });
});

app.listen(port, () => {
  console.log(`Dealer Service listening at http://localhost:${port}`);
});
