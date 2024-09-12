from django.shortcuts import render
from .models import Car
from rest_framework import viewsets
from .serializers import CarSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

class CarModelViewSet(viewsets.ModelViewSet):
    queryset=Car.objects.all()
    serializer_class=CarSerializer
    

@api_view(['POST'])
def toggle_favorite(request,car_id):
    try:
        car=Car.objects.get(id=car_id)
    except Car.DoesNotExist:
        return Response({'error':'Car not found or car doesnt exist'},status=status.HTTP_404_NOT_FOUND)
    car.isFavourite=not car.isFavourite
    car.save()
    serializer=CarSerializer(car)
    return Response(serializer.data)

@api_view(['GET'])
def get_favorites(request):
    favorite_cars=Car.objects.filter(isFavourite=True)
    serializer=CarSerializer(favorite_cars,many=True)
    return Response(serializer.data,status=status.HTTP_200_OK)