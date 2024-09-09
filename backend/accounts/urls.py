from django.urls import path
from .views import register
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from accounts import views
urlpatterns = [
    # JWT-based login and token routes
    path('register/', views.register, name='register'),
   
]
