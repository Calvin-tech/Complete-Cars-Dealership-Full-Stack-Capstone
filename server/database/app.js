const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Dealer Schema
const Dealer = mongoose.model('Dealer', new mongoose.Schema({
  id: Number,
  city: String,
  state: String,
  st: String,
  address: String,
  zip: String,
  lat: Number,
  long: Number,
  short_name: String,
  full_name: String
}));

// Review Schema
const Review = mongoose.model('Review', new mongoose.Schema({
  id: Number,
  name: String,
  dealership: Number,
  review: String,
  purchase: Boolean,
  purchase_date: String,
  car_make: String,
  car_model: String,
  car_year: Number,
  sentiment: String
}));

// Endpoints
app.get('/fetchDealers', async (req, res) => {
  const dealers = await Dealer.find();
  res.json(dealers);
});

app.get('/fetchDealersByState/:state', async (req, res) => {
  const dealers = await Dealer.find({ state: req.params.state });
  res.json(dealers);
});

app.get('/fetchDealer/:id', async (req, res) => {
  const dealer = await Dealer.findOne({ id: req.params.id });
  res.json(dealer);
});

app.get('/fetchReviews/dealer/:id', async (req, res) => {
  const reviews = await Review.find({ dealership: req.params.id });
  res.json(reviews);
});

app.post('/insertReview', async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.json({ status: 200 });
});

app.listen(port, () => {
  console.log(`Dealer Service listening at http://localhost:${port}`);
});
