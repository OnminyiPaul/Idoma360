from django.shortcuts import render
from rest_framework import viewsets
from .models import Place, LocalGovernment
from.serializers import PlaceSerializer, LocalGovernmentSerializer

# Create your views here.
class PlaceView(viewsets.ModelViewSet):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
class LocalGovernmentView(viewsets.ModelViewSet):
    queryset = LocalGovernment.objects.all()
    serializer_class = LocalGovernmentSerializer