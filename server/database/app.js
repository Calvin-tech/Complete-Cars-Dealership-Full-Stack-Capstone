const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// In-memory data
const locations = [
  { city: "Topeka", state: "Kansas", zip: "66601", lat: 39.0473, long: -95.6752 },
  { city: "Wichita", state: "Kansas", zip: "67201", lat: 37.6872, long: -97.3301 },
  { city: "Overland Park", state: "Kansas", zip: "66204", lat: 38.9822, long: -94.6708 },
  { city: "Kansas City", state: "Kansas", zip: "66101", lat: 39.1141, long: -94.6275 },
  { city: "Lawrence", state: "Kansas", zip: "66044", lat: 38.9717, long: -95.2353 },
  { city: "New York City", state: "New York", zip: "10001", lat: 40.7128, long: -74.0060 },
  { city: "Buffalo", state: "New York", zip: "14201", lat: 42.8864, long: -78.8784 },
  { city: "Rochester", state: "New York", zip: "14602", lat: 43.1566, long: -77.6088 },
  { city: "Albany", state: "New York", zip: "12201", lat: 42.6526, long: -73.7562 },
  { city: "Syracuse", state: "New York", zip: "13201", lat: 43.0481, long: -76.1474 },
  { city: "Los Angeles", state: "California", zip: "90001", lat: 34.0522, long: -118.2437 },
  { city: "San Francisco", state: "California", zip: "94105", lat: 37.7749, long: -122.4194 },
  { city: "San Diego", state: "California", zip: "92101", lat: 32.7157, long: -117.1611 },
  { city: "Sacramento", state: "California", zip: "95814", lat: 38.5816, long: -121.4944 },
  { city: "San Jose", state: "California", zip: "95101", lat: 37.3382, long: -121.8863 },
  { city: "Austin", state: "Texas", zip: "73301", lat: 30.2672, long: -97.7431 },
  { city: "Dallas", state: "Texas", zip: "75201", lat: 32.7767, long: -96.7970 },
  { city: "Houston", state: "Texas", zip: "77001", lat: 29.7604, long: -95.3698 },
  { city: "San Antonio", state: "Texas", zip: "78201", lat: 29.4241, long: -98.4936 },
  { city: "Fort Worth", state: "Texas", zip: "76101", lat: 32.7555, long: -97.3308 },
  { city: "Miami", state: "Florida", zip: "33101", lat: 25.7617, long: -80.1918 },
  { city: "Orlando", state: "Florida", zip: "32801", lat: 28.5383, long: -81.3792 },
  { city: "Tampa", state: "Florida", zip: "33601", lat: 27.9506, long: -82.4572 },
  { city: "Jacksonville", state: "Florida", zip: "32099", lat: 30.3322, long: -81.6557 },
  { city: "Tallahassee", state: "Florida", zip: "32301", lat: 30.4383, long: -84.2807 },
  { city: "Seattle", state: "Washington", zip: "98101", lat: 47.6062, long: -122.3321 },
  { city: "Spokane", state: "Washington", zip: "99201", lat: 47.6588, long: -117.4260 },
  { city: "Tacoma", state: "Washington", zip: "98401", lat: 47.2529, long: -122.4443 },
  { city: "Vancouver", state: "Washington", zip: "98601", lat: 45.6307, long: -122.6716 },
  { city: "Bellevue", state: "Washington", zip: "98004", lat: 47.6101, long: -122.2015 },
  { city: "Chicago", state: "Illinois", zip: "60601", lat: 41.8781, long: -87.6298 },
  { city: "Aurora", state: "Illinois", zip: "60502", lat: 41.7606, long: -88.3201 },
  { city: "Rockford", state: "Illinois", zip: "61101", lat: 42.2711, long: -89.0940 },
  { city: "Joliet", state: "Illinois", zip: "60431", lat: 41.5250, long: -88.0817 },
  { city: "Naperville", state: "Illinois", zip: "60540", lat: 41.7508, long: -88.1535 },
  { city: "Atlanta", state: "Georgia", zip: "30301", lat: 33.7490, long: -84.3880 },
  { city: "Savannah", state: "Georgia", zip: "31401", lat: 32.0809, long: -81.0912 },
  { city: "Columbus", state: "Georgia", zip: "31901", lat: 32.4610, long: -84.9877 },
  { city: "Augusta", state: "Georgia", zip: "30901", lat: 33.4735, long: -82.0105 },
  { city: "Macon", state: "Georgia", zip: "31201", lat: 32.8407, long: -83.6324 },
  { city: "Denver", state: "Colorado", zip: "80201", lat: 39.7392, long: -104.9903 },
  { city: "Colorado Springs", state: "Colorado", zip: "80901", lat: 38.8339, long: -104.8214 },
  { city: "Aurora", state: "Colorado", zip: "80010", lat: 39.7294, long: -104.8319 },
  { city: "Fort Collins", state: "Colorado", zip: "80521", lat: 40.5853, long: -105.0844 },
  { city: "Lakewood", state: "Colorado", zip: "80214", lat: 39.7047, long: -105.0814 },
  { city: "Phoenix", state: "Arizona", zip: "85001", lat: 33.4484, long: -112.0740 },
  { city: "Tucson", state: "Arizona", zip: "85701", lat: 32.2226, long: -110.9747 },
  { city: "Mesa", state: "Arizona", zip: "85201", lat: 33.4151, long: -111.8315 },
  { city: "Chandler", state: "Arizona", zip: "85224", lat: 33.3062, long: -111.8413 },
  { city: "Glendale", state: "Arizona", zip: "85301", lat: 33.5387, long: -112.1860 }
];

const images = [
  "/static/images/Dealerships/dextar-vision-ccgjEBvHTIU-unsplash.jpg",
  "/static/images/Dealerships/felix-PoPsSRju8Y8-unsplash.jpg",
  "/static/images/Dealerships/josue-soto-6C_L_EW1cQU-unsplash.jpg",
  "/static/images/Dealerships/man-with-sales-woman-car-showroom.jpg",
  "/static/images/Dealerships/young-couple-talking-sales-person-car-showroom.jpg",
  "/static/images/Dealerships/young-handsome-man-car-showroom.jpg"
];

let dealers = Array.from({ length: 50 }, (_, i) => {
  const loc = locations[i % locations.length];
  return {
    "id": i + 1,
    "city": loc.city,
    "state": loc.state,
    "address": `${100 + i} ${["Main St", "Broadway", "Market St", "Lakeview Dr", "Ocean Blvd"][i % 5]}`,
    "zip": loc.zip,
    "lat": loc.lat + (Math.random() * 0.01),
    "long": loc.long + (Math.random() * 0.01),
    "short_name": `Dealer ${i + 1}`,
    "full_name": `${loc.city} Premium Cars #${i + 1}`,
    "image": images[i % images.length]
  };
});

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
  const stateToFind = req.params.state.toLowerCase();
  const filtered = dealers.filter(d => d.state.toLowerCase() === stateToFind);
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
