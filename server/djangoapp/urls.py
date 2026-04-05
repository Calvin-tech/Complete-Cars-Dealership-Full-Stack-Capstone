from django.urls import path
from . import views

app_name = 'djangoapp'
urlpatterns = [
    # path for registration
    path('register/', views.registration, name='registration'),
    # path for login
    path('login/', views.login_user, name='login'),
    # path for logout
    path('logout/', views.logout_user, name='logout'),
    # path for get_dealerships
    path('get_dealers/', views.get_dealerships, name='get_dealers'),
    path('get_dealers/<str:state>', views.get_dealerships, name='get_dealers_by_state'),
    # path for dealer details
    path('dealer/<int:dealer_id>/', views.get_dealer_details, name='dealer_details'),
    # path for dealer reviews
    path('get_reviews/<int:dealer_id>/', views.get_dealer_reviews, name='dealer_reviews'),
    # path for add a review
    path('add_review/', views.add_review, name='add_review'),
    # path for get_cars
    path('get_cars/', views.get_cars, name='get_cars'),
    # path for analyze_review
    path('analyze/<str:review_text>', views.analyze_review, name='analyze_review'),
]
