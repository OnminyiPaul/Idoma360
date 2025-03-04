from django.shortcuts import render
from rest_framework import viewsets
from .models import Interest, TradRuller
from .serializers import InterestSerializer, TradRullerSeriailizer

class InterestViewSet(viewsets.ModelViewSet):
  queryset = Interest.objects.all()
  serializer_class = InterestSerializer

class TradRullerViewSet(viewsets.ModelViewSet):
  queryset = TradRuller.objects.all()
  serializer_class = TradRullerSeriailizer