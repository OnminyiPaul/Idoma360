from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import PlaceView, LocalGovernmentView
routers = DefaultRouter()
routers.register(R"place", PlaceView)
routers.register(R"localgovernment", LocalGovernmentView)
urlpatterns = routers.urls