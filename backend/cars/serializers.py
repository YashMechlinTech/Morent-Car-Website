from rest_framework import serializers
from .models import Car
class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model=Car
        fields= ['id', 'name', 'image_url', 'description', 'price', 'car_type', 'capacity', 'steering', 'gasoline_capacity','location']



        