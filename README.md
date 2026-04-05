# Cars Dealership Capstone Project

This project is a full-stack web application developed for "Cars Dealership", a national car retailer in the U.S. It displays dealership branches and allows users to view and submit reviews.

## Technologies Used
- **Frontend**: React, Bootstrap
- **Backend**: Django
- **Microservices**: Flask (Sentiment Analysis), Node.js (Dealer and Review Service)
- **Databases**: SQLite (Car models), MongoDB (Dealer and Review data)
- **Deployment**: Docker, Kubernetes, IBM Cloud Code Engine
- **CI/CD**: GitHub Actions

## Project Structure
- `server/`: Django application root (with `manage.py`)
- `server/project/`: Django project configuration (`settings.py`, `urls.py`)
- `server/djangoapp/`: Django app for managing car makes and models
- `server/frontend/`: React frontend
- `microservices/`: External services for sentiment analysis and database operations
