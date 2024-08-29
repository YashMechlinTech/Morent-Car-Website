from rest_framework import serializers
from .models import Car
class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model=Car
        fields=['name','image_url','description','price']



        