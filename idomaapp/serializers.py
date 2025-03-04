from rest_framework import serializers
from .models import Interest, TradRuller

class InterestSerializer(serializers.ModelSerializer):
  class Meta:
    model = Interest
    fields = '__all__'


class TradRullerSeriailizer(serializers.ModelSerializer):
  class Meta:
    model = TradRuller
    fields = '__all__'