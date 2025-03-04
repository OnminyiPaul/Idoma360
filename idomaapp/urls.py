from rest_framework.routers import DefaultRouter
from .views import InterestViewSet, TradRullerViewSet

routers = DefaultRouter()

routers.register(r'idoma', InterestViewSet, TradRullerViewSet)

urlpatterns = routers.urls