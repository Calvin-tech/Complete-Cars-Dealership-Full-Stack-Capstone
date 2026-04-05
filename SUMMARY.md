# Cars Dealership Full-Stack Application

## Project Description
The Cars Dealership project is a comprehensive full-stack web application designed for a national car retailer in the United States. The platform enables users to browse various dealership branches, view customer reviews, and submit their own experiences. A key feature of the application is the integration of a sentiment analysis microservice that evaluates the tone of user reviews in real-time.

The architecture follows a microservices-based approach:
- **Main Web Application**: Built with **Django** to manage car makes, models, and core business logic.
- **Dynamic UI**: A responsive frontend developed using **React** and **Bootstrap**.
- **Dealer & Review Service**: A **Node.js** application utilizing **MongoDB** for high-performance storage of dealership and review data.
- **Sentiment Analysis Service**: A **Flask**-based microservice that performs natural language processing.
- **Deployment**: Containerized using **Docker** and orchestrated via **Kubernetes** on **IBM Cloud Code Engine**.

## How to Use

### 1. Prerequisites
Ensure you have the following installed:
- Python 3.9+
- Node.js & npm
- MongoDB (running locally or a connection string)
- Docker (optional, for containerization)

### 2. Setup Microservices
**Dealer Service (Node.js):**
1. Navigate to `server/database/`.
2. Run `npm install`.
3. Start the service using `node app.js`.

**Sentiment Analysis (Flask):**
1. Navigate to `microservices/sentiment/`.
2. Install requirements: `pip install -r requirements.txt`.
3. Start the service: `python sentiment.py`.

### 3. Setup Django Backend & Frontend
1. Navigate to the project root.
2. Install Python dependencies: `pip install -r requirements.txt`.
3. Apply migrations: `python manage.py migrate`.
4. Start the server: `python manage.py runserver`.

### 4. Access the Application
- Open your browser and go to `http://127.0.0.1:8000/`.
- You can register a new user using the "Sign up" button or log in with existing credentials to post reviews.

## Features
- **Dealership Browsing**: View a list of all car dealerships across the U.S.
- **State Filtering**: Search for dealerships by state using the integrated search bar.
- **User Authentication**: Secure sign-up and login functionality.
- **Dealer Reviews**: Read verified reviews from other customers.
- **Submit Reviews**: Logged-in users can share their experiences, select the car model purchased, and provide feedback.
- **Sentiment Analysis**: Automatic tagging of reviews as Positive, Negative, or Neutral.

