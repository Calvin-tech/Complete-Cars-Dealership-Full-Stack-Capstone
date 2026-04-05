import requests
import json
import os
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

# URL of the Cloud Function and Sentiment Analysis microservice
backend_url = os.getenv('BACKEND_URL', 'http://localhost:3000')
sentiment_analyzer_url = os.getenv('SENTIMENT_ANALYZER_URL', 'http://localhost:5000')

def get_request(endpoint, **kwargs):
    params = ""
    if kwargs:
        for key, value in kwargs.items():
            params = params + key + "=" + value + "&"
    
    request_url = backend_url + "/" + endpoint
    if params:
        request_url = request_url + "?" + params
    print("GET from {} ".format(request_url))
    try:
        response = requests.get(request_url)
        return response.json()
    except:
        print("Network exception occurred")
        return []

def post_request(payload):
    request_url = backend_url + "/insertReview"
    try:
        response = requests.post(request_url, json=payload)
        return response.json()
    except:
        print("Network exception occurred")
        return {"status": 401}

def analyze_review_sentiment(text):
    request_url = sentiment_analyzer_url + "/analyze/" + text
    try:
        response = requests.get(request_url)
        return response.json()
    except Exception as err:
        print(f"Unexpected {err=}, {type(err)=}")
        print("Network exception occurred")
        return {"sentiment": "neutral"}
