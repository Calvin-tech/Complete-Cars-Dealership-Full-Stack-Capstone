from django.shortcuts import render
from django.http import JsonResponse, HttpResponseRedirect, HttpResponse
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404, render, redirect
from django.contrib.auth import logout, login, authenticate
from django.contrib import messages
from datetime import datetime
import logging
import json
from .models import CarMake, CarModel
from .restapis import get_request, post_request, analyze_review_sentiment

# Get an instance of a logger
logger = logging.getLogger(__name__)

# Create your views here.

from django.views.decorators.csrf import csrf_exempt

# Create a `logout_request` view to handle sign out parameter
def logout_user(request):
    username = request.user.username
    logout(request)
    data = {"userName": username, "status": "Logged Out"}
    return JsonResponse(data)

@csrf_exempt
def login_user(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            username = data.get('userName')
            password = data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return JsonResponse({"userName": username, "status": "Authenticated"})
            return JsonResponse({"userName": username, "status": "Failed"}, status=401)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Only POST allowed"}, status=405)

@csrf_exempt
def registration(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            username = data.get('userName')
            password = data.get('password')
            first_name = data.get('firstName')
            last_name = data.get('lastName')
            email = data.get('email')
            
            if User.objects.filter(username=username).exists():
                return JsonResponse({"userName": username, "error": "Already Registered"}, status=400)
            
            user = User.objects.create_user(username=username, first_name=first_name, last_name=last_name, password=password, email=email)
            login(request, user)
            return JsonResponse({"userName": username, "status": "Authenticated"})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Only POST allowed"}, status=405)

# Update the `get_dealerships` view to render the index page with a list of dealerships
def get_dealerships(request, state="All"):
    if state == "All":
        endpoint = "fetchDealers"
    else:
        endpoint = "fetchDealersByState/" + state
    dealerships = get_request(endpoint)
    return JsonResponse(dealerships, safe=False)

# Create a `get_dealer_reviews` view to render the reviews of a dealer
def get_dealer_reviews(request, dealer_id):
    if dealer_id:
        endpoint = "fetchReviews/dealer/" + str(dealer_id)
        reviews = get_request(endpoint)
        for review in reviews:
            response = analyze_review_sentiment(review['review'])
            review['sentiment'] = response['sentiment']
        return JsonResponse(reviews, safe=False)
    else:
        return JsonResponse({"status": 400, "message": "Bad Request"})

# Create a `get_dealer_details` view to render the dealer details
def get_dealer_details(request, dealer_id):
    if dealer_id:
        endpoint = "fetchDealer/" + str(dealer_id)
        dealer = get_request(endpoint)
        return JsonResponse(dealer, safe=False)
    else:
        return JsonResponse({"status": 400, "message": "Bad Request"})

# Create a `add_review` view to submit a review
def add_review(request):
    if not request.user.is_anonymous:
        data = json.loads(request.body)
        try:
            post_request(data)
            return JsonResponse({"status": 200})
        except:
            return JsonResponse({"status": 401, "message": "Error in posting review"})
    else:
        return JsonResponse({"status": 403, "message": "Unauthorized"})

def get_cars(request):
    count = CarMake.objects.filter().count()
    if count == 0:
        # Populate with initial data if empty
        toyota = CarMake.objects.create(name="Toyota", description="Japanese multinational automotive manufacturer", country="Japan")
        honda = CarMake.objects.create(name="Honda", description="Japanese multinational conglomerate", country="Japan")
        CarModel.objects.create(car_make=toyota, name="Camry", type="Sedan", year=2024, dealer_id=1)
        CarModel.objects.create(car_make=honda, name="Civic", type="Sedan", year=2023, dealer_id=1)

    car_models = CarModel.objects.select_related('car_make')
    cars = []
    for car_model in car_models:
        cars.append({"model": car_model.name, "make": car_model.car_make.name, "type": car_model.type, "year": car_model.year})
    return JsonResponse(cars, safe=False)

def analyze_review(request, review_text):
    sentiment = analyze_review_sentiment(review_text)
    return JsonResponse(sentiment)
