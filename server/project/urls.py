from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('djangoapp/', include('djangoapp.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    path('about/', TemplateView.as_view(template_name='About.html')),
    path('contact/', TemplateView.as_view(template_name='Contact.html')),
    path('dealer/<int:dealer_id>/', TemplateView.as_view(template_name='Dealer.html')),
    path('login/', TemplateView.as_view(template_name='Login.html')),
    path('register/', TemplateView.as_view(template_name='Register.html')),
    path('admin-dashboard/', TemplateView.as_view(template_name='Admin.html')),
    path('buyer-dashboard/', TemplateView.as_view(template_name='BuyerDashboard.html')),
    path('dealer-dashboard/', TemplateView.as_view(template_name='DealerDashboard.html')),
    path('post-review/<int:dealer_id>/', TemplateView.as_view(template_name='PostReview.html')),
] + static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])
