from rest_framework import serializers
from.models import Place, LocalGovernment
class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = "__all__"
class LocalGovernmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = LocalGovernment
        fields = "__all__"