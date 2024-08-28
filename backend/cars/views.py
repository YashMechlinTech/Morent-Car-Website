from django.shortcuts import render
from .models import Car
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import CarSerializer


class CarListView(APIView):
    def get(self,request):
        cars=Car.objects.all().distinct()
        serializer=CarSerializer(cars,many=True)
        return Response(serializer.data)
  





